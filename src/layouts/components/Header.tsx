import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Title}>Money Tracker</h1>
    </header>
  );
}

export default Header;
