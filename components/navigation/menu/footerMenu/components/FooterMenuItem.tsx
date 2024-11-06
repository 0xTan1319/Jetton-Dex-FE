/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from '../footer-menu.module.scss';

export type FooterMenuItemProps = {
  id: string;
  path: string;
  label: string;
  content: React.ReactNode;
  className?: string;
  isPrivate?: boolean;
  onClick?: (menuItemId: string, menuItemData: FooterMenuItemProps) => void;
  iconProps?: { color?: string };
};

export const FooterMenuItem = menuItemData => {
  // eslint-disable-next-line id-length
  const { id, path, label, Icon, iconProps, onClick = () => {} } = menuItemData;

  const router = useRouter();

  const isActive = useMemo(() => {
    if (!router) {
      return false;
    }

    if (router.asPath === path) {
      return true;
    }
    return false;
  }, [path, router]);

  const menuItemClasses = useCallback(() => {
    const defaultClasses = classes['footer-menu-item'];
    if (isActive) {
      return defaultClasses.concat(' ', classes.active);
    }
    return defaultClasses;
  }, [isActive]);

  const handleOnClick = () => {
    menuItemClasses();
    onClick(id, menuItemData);
  };

  return (
    <Link key={id} href={path}>
      <div
        aria-hidden="true"
        onClick={handleOnClick}
        className={menuItemClasses()}>
        {Icon && (
          <Icon className={classes['footer-menu-item-icon']} {...iconProps} />
        )}
        <h5 className={classes['footer-menu-item-label']}>{label}</h5>
      </div>
    </Link>
  );
};
