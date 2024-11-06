import { Menu } from 'antd';
import { MoreMenuItem } from './MoreMenuItem';
import ThemeSwitch from '../../../../display/themeSwitch/ThemeSwitch';
import { Language, HelpCenter, Discord, About } from '../../../../icons';
import classes from './more-menu.module.scss';
// import classes from './more-menu.module.scss';

const moreMenuItems = [
  {
    id: 'about',
    label: 'About',
    href: 'https://ton.org/',
    Icon: About,
    iconProps: { color: 'var(--primary-color)' },
    alt: 'About'
  },
  {
    id: 'discord',
    label: 'Discord',
    href: 'https://ton.org/',
    Icon: Discord,
    iconProps: { color: 'var(--primary-color)' },
    alt: 'Discord'
  },
  {
    id: 'helpCenter',
    label: 'Help Center',
    href: 'https://ton.org/',
    Icon: HelpCenter,
    iconProps: { color: 'var(--primary-color)' },
    alt: 'Help Center'
  }
];

const MoreMenuComp = () => (
  <Menu>
    <div className={classes['more-menu-item-language']}>
      <Language />
    </div>
    {moreMenuItems.map(({ id, label, href, Icon, iconProps }) => (
      <MoreMenuItem
        key={id}
        id={id}
        label={label}
        href={href}
        Icon={Icon}
        iconProps={iconProps}
      />
    ))}
    <div className={classes['more-menu-item-theme-switch']}>
      <ThemeSwitch />
    </div>
  </Menu>
);

export default MoreMenuComp;
