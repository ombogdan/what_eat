import React from 'react';
import { useScale } from 'shared/hooks/useScale';
import { isTablet as isTabletOrientation } from 'shared/utils/isTablet';

import { useTheme } from './ThemeProvider';

export const createStyles = (callback: any) => {
  const useStyles = (depsObj?: any) => {
    const scale = useScale();
    const { theme } = useTheme();
    const isTablet = isTabletOrientation();

    const deps = depsObj || {};
    const styles = React.useMemo(
      () => callback({ scale, isTablet, theme, ...deps }),
      [Object.values(deps), theme],
    );

    return styles;
  };

  return useStyles;
};
