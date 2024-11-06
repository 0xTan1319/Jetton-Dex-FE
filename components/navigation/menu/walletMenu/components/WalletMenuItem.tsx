import { Menu } from 'antd';
import classes from './wallet-menu.module.scss';

export type WalletMenuItemProps = {
  href?: string;
  label: string;
  Icon: string;
  alt: string;
  iconProps?: { color?: string };
  onClick?: any;
};

export const WalletMenuItem = (walletMenuItemProps: WalletMenuItemProps) => {
  const {
    href,
    label,
    Icon = undefined,
    iconProps = {},
    onClick
  } = walletMenuItemProps;
  return (
    <Menu.Item>
      {onClick ? (
        <div
          className={classes['wallet-menu-item']}
          onClick={onClick}
          role="presentation">
          {Icon && <Icon {...iconProps} />}
          <h6 className="mb-0">{label}</h6>
        </div>
      ) : (
        <a target="_blank" rel="noopener noreferrer" href={href}>
          <div className={classes['wallet-menu-item']}>
            {Icon && <Icon {...iconProps} />}
            <h6 className="mb-0">{label}</h6>
          </div>
        </a>
      )}
    </Menu.Item>
  );
};
