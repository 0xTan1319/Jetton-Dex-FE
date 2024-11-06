import { useMemo } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useSelector, useDispatch } from '../../hooks/useRedux';
import { updateConfigThemeId } from '../../../redux/config/config.slice';
import { selectConfigThemeId } from '../../../redux/config/config.selectors';
import classes from './theme-switch.module.scss';

const ThemeSwitch = () => {
  const selectedThemeId = useSelector(selectConfigThemeId);

  const dispatch = useDispatch();
  const isActive = useMemo(
    () => selectedThemeId === 'default',
    [selectedThemeId]
  );

  const onChange = event => {
    const newSelectedThemeId = event?.target?.checked ? 'default' : 'dark';
    dispatch(updateConfigThemeId(newSelectedThemeId));
  };

  return (
    <span className={classes['theme-switch']}>
      <MdDarkMode
        color="var(--text-color)"
        size={20}
        className={isActive ? classes.inactive : classes.active}
      />
      <div className={classes['theme-switch__switch']}>
        <input
          checked={selectedThemeId === 'default'}
          onChange={onChange}
          type="checkbox"
          id="theme-switch"
          className={classes.input}
        />
        <label className={classes.label} htmlFor="theme-switch" />
      </div>
      <MdLightMode
        color="var(--text-color)"
        size={20}
        className={isActive ? classes.active : classes.inactive}
      />
    </span>
  );
};

export default ThemeSwitch;
