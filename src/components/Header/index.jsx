import React from 'react';
import { NavLink } from 'react-router-dom';

import Search from '@/components/ui/Search';
import styles from './Header.module.scss';
import Logo from '@/assets/logo.png';

const Header = ({ hasSearch }) => {
  return (
    <div className={styles.header}>
      <NavLink to='/' className={styles.header_logo}>
        <img src={Logo} alt='logo' />
        Start of the day app
      </NavLink>
      {hasSearch && (
        <div className={styles.search_input}>
          <Search />
        </div>
      )}
      <div className={styles.nav_items}>
        <NavLink to='/'>Weather</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
      </div>
    </div>
  );
};

export default Header;
