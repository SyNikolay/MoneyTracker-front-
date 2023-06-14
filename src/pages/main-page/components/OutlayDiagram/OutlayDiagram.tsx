import { useEffect } from 'react';

import { useUser } from '../../../../store/UserStore';
import DIagramItem from './DIagramItem';

import styles from './OutlayDiagram.module.scss';

const OutlayDiagram = () => {
  const fetchAllCategories = useUser((state) => state.fetchAllCategories);
  const setOutlay = useUser((state) => state.setOutlay);
  const fullOutlay = useUser((state) => state.fullOutlay);
  const categories = useUser((state) => state.categories);

  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  useEffect(() => {
    console.log(categories);
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
