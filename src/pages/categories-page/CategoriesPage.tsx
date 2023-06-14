import React from 'react';

import styles from './CategoriesPage.module.scss';
import OutlayForm from './components/OutlayForm/OutlayForm';

const CategoriesPage = () => {
  return (
    <div className={styles.CategoriesPage}>
      <OutlayForm />
    </div>
  );
};

export default CategoriesPage;
