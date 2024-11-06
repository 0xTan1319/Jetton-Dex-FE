import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from '../../main-menu.module.scss';

export type MainMenuItemProps = {
  id: string;
  path: string;
  label: string;
  content: React.ReactNode;
  className?: string;
  isPrivate?: boolean;
  onClick?: (menuItemId: string, menuItemData: MainMenuItemProps) => void;
};

export const MainMenuItem = (menuItemData: MainMenuItemProps) => {
  // eslint-disable-next-line id-length
  const { id, path, label, onClick = () => {} } = menuItemData;

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
    const defaultClasses = classes['main-menu-item'];
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
        <h4>{label}</h4>
      </div>
    </Link>
  );
};
