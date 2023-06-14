import React, { FC } from 'react';
import Header from './components/Header';

import styles from './MaitLayout.module.scss'
import NavigationMenu from './components/NavigationMenu';

interface IProps {
  children: React.ReactNode;
}

const MaitLayout: FC <IProps> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Header}>
        <Header />
      </div>
      <div className={styles.Content}>
        { children }
      </div>
      <div className={styles.Footer}>
        <NavigationMenu />
      </div>
    </div>
  );
}

export default MaitLayout;