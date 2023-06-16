import React from 'react';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/consts';
import { useUser } from '../../store/UserStore';

const Header = () => {
  const isAuth = useUser((state) => state.isAuth);

  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>Money Tracker</h1>
      {isAuth && <Link to={Routes.ACCOUNT} className={styles.Header__accountLink}></Link>}
    </header>
  );
};

export default Header;
