import { useMemo } from 'react';
import { isArrayWithItems } from '../../../../utils/functions/validations/array';
import classes from './footer-menu.module.scss';
import {
  FooterMenuItem,
  FooterMenuItemProps
} from './components/FooterMenuItem';
import { footerMenuRoutes, routes } from '../../../../routes/routes';
import { isObjectWithValues } from '../../../../utils/functions/validations/object';

export type FooterMenuProps = {
  onClick?: (menuItemId: string, menuItemData: FooterMenuItemProps) => void;
};

export const FooterMenu = (mainMenuProps: FooterMenuProps) => {
  const { onClick = () => {} } = mainMenuProps;
  const footerMenuItems = useMemo(() => {
    if (!isObjectWithValues(routes)) {
      return [];
    }
    if (!isArrayWithItems(footerMenuRoutes)) {
      return [];
    }
    const footerMenuRoutesFiltered = footerMenuRoutes.map(
      footerMenuRouteId => ({
        ...routes[footerMenuRouteId]
      })
    );
    return footerMenuRoutesFiltered;
  }, []);

  return (
    <div className={classes['footer-menu']}>
      {footerMenuItems.map((menuItemData: FooterMenuItemProps) => (
        <FooterMenuItem
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...menuItemData}
          key={menuItemData.id}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
