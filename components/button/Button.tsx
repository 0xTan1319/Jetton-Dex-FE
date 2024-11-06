import React from 'react';
import { Button as ButtonAntd } from 'antd';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  children: React.ReactNode;
  htmlType?: 'submit' | 'reset' | 'button';
  isDanger?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  size?: 'large' | 'middle' | 'small';
  shape?: 'default' | 'circle' | 'round';
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  className?: string;
};

export const Button = ({
  children,
  htmlType = 'button',
  isDanger = false,
  isDisabled = false,
  isLoading = false,
  onClick,
  size = 'middle',
  type = 'default',
  shape = 'default',
  className = ''
}: ButtonProps) => (
  <ButtonAntd
    className={`button ${className}`}
    danger={isDanger}
    size={size}
    shape={shape}
    onClick={onClick}
    type={type}
    htmlType={htmlType}
    loading={isLoading}
    disabled={isDisabled}>
    {children}
  </ButtonAntd>
);
