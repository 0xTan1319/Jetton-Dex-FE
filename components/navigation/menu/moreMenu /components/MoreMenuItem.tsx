import { Menu } from 'antd';
import classes from './more-menu.module.scss';

export type MoreMenuItemProps = {
  href: string;
  label: string;
  Icon: string;
  alt: string;
  iconProps?: { color?: string };
};

export const MoreMenuItem = (moreMenuItemProps: MoreMenuItemProps) => {
  const { href, label, Icon = undefined, iconProps = {} } = moreMenuItemProps;
  return (
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <div className={classes['more-menu-item']}>
          {Icon && <Icon {...iconProps} />}
          <h6 className="mb-0">{label}</h6>
        </div>
      </a>
    </Menu.Item>
  );
};
