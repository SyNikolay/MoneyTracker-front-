import React, { useEffect }  from 'react';
import axios from "axios";

import { useUser } from '../../../../store/UserStore';
import { BASE_URL } from '../../../../utils/consts';
import ListItem from './ListItem';

import styles from './OutlayList.module.scss';

const OutlayList = () => {
  const fetchAllOutlays = useUser(state => state.fetchAllOutlays);
  const fetchAllCategories = useUser(state => state.fetchAllCategories);
  const loading = useUser(state => state.loading);
  const outlays = useUser(state => state.outlays);
  
  useEffect(() => {
    fetchAllOutlays();
  },[fetchAllOutlays])

const deleteCategory = async (name: string) => {
  try {
    await axios.post(BASE_URL + '/outlays/delete', { name: name }); 
  } catch (error) {
    console.log(error);
  } finally {
    fetchAllOutlays();
    fetchAllCategories();
  }
}
  return (
    <div className={styles.OutlayList}>
      <h2 className={styles.ListTitle}>Лист расходов</h2>
      {loading
      ? <p>Loading...</p> 
      : <div className={styles.ListTable}>
          {outlays.map(el => <ListItem  key={el.id} item={el} onClick={deleteCategory}/>)}
        </div>}
    </div>
  );
}

export default OutlayList;