import React, { useEffect } from 'react';
import axios from 'axios';

import { useMain } from '../../../../store/MainStore';
import { BASE_URL } from '../../../../utils/consts';
import ListItem from './ListItem';

import styles from './OutlayList.module.scss';
import { useUser } from '../../../../store/UserStore';

const OutlayList = () => {
  const fetchAllOutlays = useMain((state) => state.fetchAllOutlays);
  const fetchAllCategories = useMain((state) => state.fetchAllCategories);
  const loading = useMain((state) => state.loading);
  const outlays = useMain((state) => state.outlays);
  const userId = useUser((state) => state.user?.id);

  useEffect(() => {
    fetchAllOutlays(userId);
  }, [fetchAllOutlays, userId]);

  const deleteCategory = async (name: string) => {
    try {
      await axios.post(BASE_URL + '/outlays/delete', { name: name, userId: userId });
    } catch (error) {
      console.log(error);
    } finally {
      fetchAllOutlays(userId);
      fetchAllCategories(userId);
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
