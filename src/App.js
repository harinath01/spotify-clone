import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "./Spotify";
import Player from "./Player";
import { useStatevalue } from "./Datalayer";

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStatevalue();
  useEffect(() => {
    let _token;
    if (token === null) {
      let hash = getTokenFromResponse();
      window.location.hash = "";
      _token = hash.access_token;
      console.log(_token);
    } else {
      _token = token;
    }
    if (_token) {
      s.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("0zWvtGCmuayFlskL8EFvsG").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        }),
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        }),
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, []);
  return (
    <div className='app'>
      {!token && <Login />}
      {token && <Player spotify={s}/>}
    </div>
  );
}

export default App;
