import { useEffect } from 'react';
import ListItem from './ListItem';

import { useUser } from '../../../../store/UserStore';

import { deleteOutlay } from '../../../../api/outlaysApi';

import styles from './OutlayList.module.scss';

const OutlayList = () => {
  const setUser = useUser(state => state.setUser)
  const fetchAllOutlays = useUser((state) => state.fetchAllOutlays);
  const fetchAllCategories = useUser((state) => state.fetchAllCategories);
  const loading = useUser((state) => state.loading);
  const outlays = useUser((state) => state.outlays);
  const userId = useUser((state) => state.user?.id);

  useEffect(() => {
    fetchAllOutlays(userId);
  }, [fetchAllOutlays, userId]);

  const deleteCategory = async (name: string) => {
    try {
      const res = await deleteOutlay(name, userId!);
      setUser(res, true)
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
          {outlays.reverse().map((el) => (
            <ListItem key={el.id} item={el} onClick={deleteCategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OutlayList;
