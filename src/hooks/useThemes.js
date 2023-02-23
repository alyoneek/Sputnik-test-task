import React from 'react';
import { themeFromTime } from '@/utils/themeFromTime';

export const useTheme = () => {
  const [theme, setTheme] = React.useState(
    themeFromTime(new Date().getHours())
  );

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
