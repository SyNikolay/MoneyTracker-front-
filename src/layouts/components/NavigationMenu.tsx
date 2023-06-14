import React from 'react';

import styles from './NavigationMenu.module.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/consts';

const NavigationMenu = () => {
  return (
    <div className={styles.NavigationMenu}>
      <Link to={Routes.MAIN}>main</Link>
      <Link to={Routes.CATEGORIES}>categories</Link>
      <Link to={Routes.LIST}>list</Link>
      <Link to={Routes.DIAGRAM}>diagram</Link>
    </div>
  );
};

export default NavigationMenu;
