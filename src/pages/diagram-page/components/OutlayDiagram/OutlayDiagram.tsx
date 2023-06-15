import { useEffect } from 'react';

import { useMain } from '../../../../store/MainStore';
import DIagramItem from './DIagramItem';

import styles from './OutlayDiagram.module.scss';

const OutlayDiagram = () => {
  const fetchAllCategories = useMain((state) => state.fetchAllCategories);
  const setOutlay = useMain((state) => state.setOutlay);
  const fullOutlay = useMain((state) => state.fullOutlay);
  const categories = useMain((state) => state.categories);

  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  useEffect(() => {
    if (categories.length > 0) {
      let outlays = 0;
      categories.forEach((el) => {
        return (outlays += el.balance);
      });
      setOutlay(outlays);
    }
  }, [categories, setOutlay]);

  return (
    <div>
      <p className={styles.DiagramTitle}>Всего потрачено: {fullOutlay}</p>
      {categories.map((el, i) => (
        <>{el.balance !== 0 && <DIagramItem key={el.id} item={el} idx={i} />}</>
      ))}
    </div>
  );
};

export default OutlayDiagram;
