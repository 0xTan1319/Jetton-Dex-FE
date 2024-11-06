import { Menu } from 'antd';
import classes from './wallet-menu.module.scss';

export type WalletMenuItemProps = {
  href: string;
  label: string;
  icon: string;
  alt: string;
};

export const WalletMenuItem = ({ href, label, icon = undefined, alt }) => (
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <div className={classes['wallet-menu-item']}>
        <img alt={alt} src={icon} />
        <div>{label}</div>
      </div>
    </a>
  </Menu.Item>
);
