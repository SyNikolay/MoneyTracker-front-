import React, { FC } from 'react';
import { Outlay } from '../../../../types/types';
import { useMain } from '../../../../store/MainStore';

import styles from './DIagramItem.module.scss';
import { DIAGRAM_COLORS } from '../../../../utils/consts';

interface IProps {
  item: Outlay;
  idx: number;
}

const DIagramItem: FC<IProps> = ({ item, idx }) => {
  const fullOutlay = useMain((state) => state.fullOutlay);
  const percent = Math.floor((item.balance / fullOutlay) * 1000) / 10;

  return (
    <div className={styles.OutlayItem}>
      <div>
        <div className={styles.DiagramContainer}>
          <span
            className={styles.Diagram}
            style={{ width: `${percent}%`, backgroundColor: DIAGRAM_COLORS[idx] }}
          ></span>
        </div>
        <span className={styles.Percent}>{percent} %</span>
      </div>
      <div>
        <span>{item.name}</span>
        <span className={styles.Ballance}>{item.balance} ₽</span>
      </div>
    </div>
  );
};

export default DIagramItem;
