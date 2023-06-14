import React from 'react';

import OutlayForm from './components/OutlayForm/OutlayForm';
import OutlayList from './components/OutlayList/OutlayList';

import styles from './MainPage.module.scss';
import OutlayDiagram from './components/OutlayDiagram/OutlayDiagram';

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <div style={{ minHeight: '100%' }}>
        <OutlayForm />
        <OutlayList />
      </div>
      <div>
        <OutlayDiagram />
      </div>
    </div>
  );
};

export default MainPage;
