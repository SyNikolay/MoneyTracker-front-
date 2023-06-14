import React from 'react';

import OutlayList from './components/OutlayList/OutlayList';

import styles from './ListPage.module.scss';

const ListPage = () => {
  return (
    <div className={styles.ListPage}>
      <OutlayList />
    </div>
  );
};

export default ListPage;
