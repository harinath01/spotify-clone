export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes

const clientId = "09a7a0589a454e6c851d0cc616382283";

const redirectUri = "https://spotify-clone-5cd39.web.app";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=https://spotify-clone-5cd39.web.app&scope=${scopes.join(
  "%20",
)}&response_type=token&show_dialog=true`;
