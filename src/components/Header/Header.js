import React from 'react';

import './Header.css';

const Header = props => (
  <div className="header">
    <h1 className="header__greetings">
      {props.showProfileImage ? 'Hello,' : null} Paulo
    </h1>
    {props.showProfileImage ? <div className="header__photo" /> : null}
  </div>
);

export default Header;
