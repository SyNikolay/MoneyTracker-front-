import React, { ElementType, FC, ReactNode } from 'react';

import classNames from 'classnames';

import styles from './Text.module.scss';

type Variant = 'p1' | 'p2' | 'p3' | 'p4' | 'price';
type Weight = 'light' | 'medium' | 'bold';
type Color = 'primary' | 'secondary' | 'accent' | 'info';
export type Align = 'left' | 'center' | 'right';

interface Props {
  variant?: Variant;
  weight?: Weight;
  className?: string;
  children: ReactNode;
  component?: ElementType;
  block?: boolean;
  color?: Color;
  align?: Align;
}

export const Text: FC<Props> = ({
  children,
  variant = 'p1',
  weight = 'light',
  className,
  component = 'span',
  color = 'primary',
  block = false,
  align = 'left',
}) => {
  const Component = component;
  return (
    <Component
      className={classNames(
        className,
        styles[variant],
        styles[weight],
        { [styles.block]: block },
        styles[color],
        styles[align]
      )}
    >
      {children}
    </Component>
  );
};
