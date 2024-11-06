import React from 'react';
import { Card as CardAntd, CardProps } from 'antd';
import styles from './Card.module.scss';

export interface CardInterface extends React.FC<CardProps> {
  children: React.ReactNode;
  isLoading?: boolean;
  hasShadow?: boolean;
  isHoverable?: boolean;
  isBordered?: boolean;
  className: string;
}
export const Card = (cardProps: CardInterface) => {
  const {
    children = undefined,
    className = '',
    isHoverable = false,
    isLoading = false,
    hasShadow = false,
    isBordered = false
  } = cardProps;
  return (
    <CardAntd
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...cardProps}
      className={`card ${className} ${hasShadow ? styles.shadow : ''}`}
      hoverable={isHoverable}
      loading={isLoading}
      bordered={isBordered}>
      {children}
    </CardAntd>
  );
};
