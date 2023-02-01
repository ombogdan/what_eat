import React, { createContext, useContext, useState, useMemo } from 'react';
import { defaultTheme } from './theme';

export const ThemeContext = createContext({
  theme: defaultTheme,
});

export const useTheme = () => useContext(ThemeContext);

export type TThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [theme] = useState(defaultTheme);
  //   const [isLoadingTheme, setLoadingThemeStatus] = useState(true);

  //   const getOldTheme = async () => {
  //     const themeMode = await AsyncStorage.getItem('themeMode');
  //     if (themeMode !== null) {
  //       if (themeMode === 'darkTheme') {
  //         setTheme(darkTheme);
  //       } else {
  //         setTheme(whiteTheme);
  //       }
  //       setLoadingThemeStatus(false);
  //     }
  //     setLoadingThemeStatus(false);
  //   };

  //   const updateTheme = async (currentThemeMode) => {
  //     const newTheme = currentThemeMode === 'darkTheme' ? whiteTheme : darkTheme;
  //     const newThemeName =
  //       currentThemeMode === 'darkTheme' ? 'whiteTheme' : 'darkTheme';
  //     await AsyncStorage.setItem('themeMode', `${newThemeName}`);

  //     setTheme(newTheme);
  //   };

  //   useEffect(() => {
  //     getOldTheme();
  //   }, []);

  //   const isDarkTheme = theme.mode === 'darkTheme';

  const memoizedValue = useMemo(() => {
    const value = {
      theme,
      //   isLoadingTheme,
      //   updateTheme,
    };
    return value;
  }, [
    theme,

    // updateTheme
  ]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};
