import { useEffect, useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { fromObjectToCssVariables } from '../utils/functions/formatters/string';
import { themes } from '../utils/constants/themes';
import {
  selectConfigThemeId,
  selectConfigThemeModifyVars
} from '../redux/config/config.selectors';
import { useSelector } from '../components/hooks/useRedux';

const useTheme = () => {
  const themeIdSelected = useSelector(selectConfigThemeId);
  const configThemeModifyVars = useSelector(selectConfigThemeModifyVars);

  useEffect(() => {
    const updateTheme = () => {
      const themeVars = {
        ...themes[themeIdSelected]?.vars,
        ...configThemeModifyVars
      };
      document.documentElement.setAttribute('data-theme', `${themeIdSelected}`);
      const cssThemeVars = fromObjectToCssVariables(themeVars);
      document.documentElement.setAttribute('style', cssThemeVars);

      ConfigProvider.config({
        theme: themeVars
      });
    };
    updateTheme();
  }, [configThemeModifyVars, themeIdSelected]);

  const hookObject = useMemo(() => ({ themeIdSelected }), [themeIdSelected]);
  return hookObject;
};

export default useTheme;
