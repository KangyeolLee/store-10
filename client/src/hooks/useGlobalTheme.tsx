import { useState } from 'react';
import { lightMode, darkMode } from '@/styles/theme';
import { DefaultTheme } from 'styled-components';
import { THEME_MODE } from '@/utils/constant/common';

const useGlobalTheme = (): [DefaultTheme, () => void, string] => {
  const localTheme =
    localStorage.getItem('Theme') === THEME_MODE.dark
      ? THEME_MODE.dark
      : THEME_MODE.light;
  const [theme, setTheme] = useState(localTheme);

  const themeMode = theme === THEME_MODE.light ? lightMode : darkMode;
  const toggleMode = () => {
    const _theme =
      theme === THEME_MODE.light ? THEME_MODE.dark : THEME_MODE.light;
      
      setTheme(_theme);
      localStorage.setItem('Theme', _theme);
  };

  return [themeMode, toggleMode, theme];
};

export default useGlobalTheme;
