import React, { useEffect } from 'react';
import axios from 'axios';

import { useMain } from '../../../../store/MainStore';
import { BASE_URL } from '../../../../utils/consts';
import ListItem from './ListItem';

import styles from './OutlayList.module.scss';

const OutlayList = () => {
  const fetchAllOutlays = useMain((state) => state.fetchAllOutlays);
  const fetchAllCategories = useMain((state) => state.fetchAllCategories);
  const loading = useMain((state) => state.loading);
  const outlays = useMain((state) => state.outlays);

  useEffect(() => {
    fetchAllOutlays();
  }, [fetchAllOutlays]);

  const deleteCategory = async (name: string) => {
    try {
      await axios.post(BASE_URL + '/outlays/delete', { name: name });
    } catch (error) {
      console.log(error);
    } finally {
      fetchAllOutlays();
      fetchAllCategories();
    }
  };
  return (
    <div className={styles.OutlayList}>
      <h2 className={styles.ListTitle}>Лист расходов</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.ListTable}>
          {outlays.map((el) => (
            <ListItem key={el.id} item={el} onClick={deleteCategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OutlayList;
