import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../main-menu.module.scss';
import { Text } from '../../../../typography';

// eslint-disable-next-line import/prefer-default-export
export const MenuItemIcon = menuItemData => {
  const {
    id,
    path,
    label,
    className = '',
    content
  } = menuItemData;

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

  return (
    <Link key={id} href={path}>
      <a
        onClick={event => onClick(id, menuItemData, event)}
        className={`menu-item ${className} ${isActive ? styles.active : ''}`}>
        <div className={styles['menu-item-icon']}>
          {content}
          <Text ellipsis className={styles['menu-item-icon__label']}>
            {label}
          </Text>
        </div>
      </a>
    </Link>
  );
};
