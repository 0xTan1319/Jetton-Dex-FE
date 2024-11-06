import { Menu as MenuAtd, MenuProps } from 'antd';
import React from 'react';
import { Text } from '../../typography';

// export type MenuProps = {
//   hasHeader?: boolean;
//   header?: React.ReactNode;
// };

interface MenuInterface extends React.FC<MenuProps> {
  hasHeader?: boolean;
  header?: React.ReactNode;
}

const { Item } = MenuAtd;
export const Menu = ({
  hasHeader = false,
  header = undefined
}: MenuInterface) => (
  <MenuAtd>
    {hasHeader && header}
    <Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wallet.ton.org/">
        Wallet
      </a>
    </Item>
    <Item>
      <a target="_blank" rel="noopener noreferrer" href="https://ton.diamonds/">
        <img src="/ton-diamond-nfts-small.svg" />
        NFTs
      </a>
    </Item>
    <Item>
      <a rel="noopener noreferrer" href="#">
        3rd menu item
      </a>
    </Item>
  </MenuAtd>
);
