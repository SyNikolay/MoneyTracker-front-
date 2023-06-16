import { useEffect } from 'react';

import { useMain } from '../../../../store/MainStore';
import DIagramItem from './DIagramItem';

import styles from './OutlayDiagram.module.scss';

const OutlayDiagram = () => {
  const fullOutlay = useMain((state) => state.fullOutlay);
  const categories = useMain((state) => state.categories);

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
