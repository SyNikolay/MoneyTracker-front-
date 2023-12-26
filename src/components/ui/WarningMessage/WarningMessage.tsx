import { FC, ReactNode } from 'react';

import { Text } from '../Text';
import classNames from 'classnames';

import styles from './WarningMessage.module.scss';
import { AttentionIcon } from 'assets/images';

interface Props {
  children: string | ReactNode;
  className?: string;
  type?: 'warning' | 'error';
}
export const WarningMessage: FC<Props> = ({ children, className, type = 'warning' }) => {
  return (
    <p className={classNames(styles.Warning, className)}>
      <AttentionIcon className={classNames(type === 'warning' ? styles.WarningIcon : styles.ErrorIcon)} />
      <Text variant="p2" className={classNames(type === 'warning' ? styles.WarningText : styles.ErrorText)}>
        {children}
      </Text>
    </p>
  );
};
