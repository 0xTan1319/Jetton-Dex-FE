import { useMemo } from 'react';
import { isArrayWithItems } from '../../../../utils/functions/validations/array';
import classes from './main-menu.module.scss';
import { MainMenuItem, MainMenuItemProps } from './components/menuItem';
import { mainMenuRoutes, routes } from '../../../../routes/routes';
import { isObjectWithValues } from '../../../../utils/functions/validations/object';

export type MainMenuProps = {
  onClick?: (menuItemId: string, menuItemData: MainMenuItemProps) => void;
};

export const MainMenu = (mainMenuProps: MainMenuProps) => {
  const { onClick = () => {} } = mainMenuProps;
  const mainMenuItems = useMemo(() => {
    if (!isObjectWithValues(routes)) {
      return [];
    }
    if (!isArrayWithItems(mainMenuRoutes)) {
      return [];
    }
    const mainMenuRoutesFiltered = mainMenuRoutes.map(mainMenuRouteId => ({
      ...routes[mainMenuRouteId]
    }));
    return mainMenuRoutesFiltered;
  }, []);

  return (
    <div className={classes.menu}>
      {mainMenuItems.map((menuItemData: MainMenuItemProps) => (
        <MainMenuItem
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...menuItemData}
          key={menuItemData.id}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
