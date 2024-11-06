import { createContext } from 'react';
import useTheme from './useTheme';

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  useTheme();
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
