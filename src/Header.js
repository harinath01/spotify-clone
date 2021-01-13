import React from "react";
import "./Header.css";
import Chip from '@material-ui/core/Chip';
import { useStatevalue } from "./Datalayer";
import { Avatar } from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"; import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function Header({ spotify }) {
  const [{ user }, dispatch] = useStatevalue();


  return (
    <div className='header'>
      <div className='header__left'>
        <ArrowBackIosIcon className='left_arrow' fontSize='small' />
        <ArrowForwardIosIcon className='right_arrow' fontSize='small' />
      </div>
      <div className='header__right'>
        <Chip
          avatar={
            <Avatar
              alt={user?.display_name}
              src={user?.images[0].url}
              className='small'
            />
          }
          label={user?.display_name}
          className='chip'
        />
      </div>
    </div>
  );
}

export default Header;
