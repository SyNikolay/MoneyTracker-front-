import React, { FC } from 'react';
import Header from './components/Header';

import styles from './MaitLayout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const MaitLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Header}>
        <Header />
      </div>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default MaitLayout;
