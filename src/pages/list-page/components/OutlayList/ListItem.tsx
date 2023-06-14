import React, { FC } from 'react';

import { Outlay } from '../../../../types/types';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './ListItem.module.scss';

interface IProps {
  item: Outlay;
  onClick: (val: string) => void;
}

const ListItem: FC<IProps> = ({ item, onClick }) => {
  return (
    <div className={styles.ListItem}>
      <div>
        <p className={styles.Title}>{item.name}</p>
        <p className={styles.Comment}>{item.comment}</p>
      </div>
      <span>{item.balance}</span>
      <span>
        <Button
          variant="outlined"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => onClick(item.name)}
        >
          delete
        </Button>
      </span>
    </div>
  );
};

export default ListItem;
