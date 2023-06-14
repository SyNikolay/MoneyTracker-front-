import React from 'react';

import OutlayDiagram from './components/OutlayDiagram/OutlayDiagram';

import styles from './DiagramPage.module.scss';

const DiagramPage = () => {

  return (
    <div className={styles.DiagramPage}>
      <OutlayDiagram />
    </div>
  );
}

export default DiagramPage;