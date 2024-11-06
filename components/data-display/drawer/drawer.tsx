import React from "react";
import { Drawer as DrawerAntd } from "antd";

export type DrawerProps = {
  /**
   * drawer body content.
   */
  children: React.ReactNode;
  /**
   * if is true, drawer is open.
   */
  isVisible: boolean;
  /**
   * onClose drawer event callBack.
   */
  onClose?: () => void;
  placement?: "top" | "right" | "bottom" | "left";
  className?: string;
};

export const Drawer = ({
  children,
  isVisible = false,
  onClose,
  placement,
  className = "",
}: DrawerProps) => {
  return (
    <DrawerAntd
      className={`drawer ${className}`}
      visible={isVisible}
      onClose={onClose}
      placement={placement}
    >
      {children}
    </DrawerAntd>
  );
};
