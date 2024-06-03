import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';

import './MainNavigation.css';

const MainNavigation = (props) => {
  return (
    <MainHeader>
      {/* <button></button> */}
      <h1 className=".main-navigation__title">
        <Link to="/">CloudFurniture</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
}

export default MainNavigation;