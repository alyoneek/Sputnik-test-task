import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from './Search';

import styles from './Header.module.scss';

import WeatherLogo from '@/assets/weather-logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to='/' className={styles.header_logo}>
        <img src={WeatherLogo} alt='' />
        Start of the day app
      </NavLink>
      <div className={styles.search_input}>
        <Search />
      </div>
      <div className={styles.nav_items}>
        <NavLink to='/'>Weather</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
      </div>
    </div>
  );
};

export default Header;
