import React from 'react';
import { Menu, Dropdown as DropdownAntd, DropDownProps } from 'antd';

// export type DropdownProps = {
//   children?: React.ReactNode;
//   placement?: string;
//   overlay: () => void;
//   arrow?: boolean;
// };
export interface DropdownInterface extends React.FC<DropDownProps> {
  children: React.ReactNode;
}

export const Dropdown = (dropdownProps: DropdownInterface) => {
  const { children, overlay, placement, arrow } = dropdownProps;
  return (
    <DropdownAntd
      overlayClassName="dropdown"
      overlay={overlay}
      placement={placement}
      arrow={arrow}>
      {children}
    </DropdownAntd>
  );
};
