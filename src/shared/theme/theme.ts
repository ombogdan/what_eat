export interface IAppTheme {
  palette: {
    black: `#${string}`;
    transparentBlack: `rgba(${number}, ${number}, ${number}, ${number})`;
    white: `#${string}`;
    transparentWhite: `rgba(${number}, ${number}, ${number}, ${number})`;
    gray: `#${string}`;
    lightGray: `#${string}`;
    transparentGray: `${string}`;
    green: `#${string}`;
    purple: `#${string}`;
    pink: `#${string}`;
    orange: `#${string}`;
    yellow: `#${string}`;
    sky: `#${string}`;
    lightSky: `rgba(${number}, ${number}, ${number}, ${number})`;
    blueIris: `#${string}`;
    red: `#${string}`;
    activeRed: `#${string}`;
    lightGreen: `#${string}`;
    lightBlack: `#${string}`;
    brightCerulean: `#${string}`;
    seriousCloud: `#${string}`;
    lightYellow: `#${string}`;
    transparent: string;
    shoeWaxTransparent: `rgba(${number}, ${number}, ${number}, ${number})`;
    transparentRed: `rgba(${number}, ${number}, ${number}, ${number})`;
    grayForm: `rgba(${number}, ${number}, ${number}, ${number})`;
  };
  fonts: {};
}

export const defaultTheme: IAppTheme = {
  palette: {
    black: '#000000',
    transparentBlack: 'rgba(0, 0, 0, 0.5)',
    white: '#FFFFFF',
    transparentWhite: 'rgba(255, 255, 255, 0.5)',
    gray: '#8C847B',
    lightGray: '#B3B3B3',
    transparentGray: 'rgba(125, 131, 137, 0.5)',
    green: '#97CA3E',
    purple: '#8C2062',
    pink: '#C62C65',
    orange: '#F68013',
    yellow: '#F0D107',
    sky: '#00B0D8',
    lightSky: 'rgba(0, 176, 216, 0.5)',
    blueIris: '#5A5AA0',
    red: '#C4122E',
    activeRed: '#A60F27',
    lightGreen: '#CBE49F',
    lightBlack: '#2B2B2B',
    brightCerulean: '#1CB0D8',
    seriousCloud: '#7D8389',
    lightYellow: '#FFCF03',
    transparent: 'transparent',
    shoeWaxTransparent: 'rgba(43, 43, 43, 0.5)',
    transparentRed: 'rgba(196, 17, 46, 0.75)',
    grayForm: 'rgba(239, 239, 239, 0.33)',
  },
  fonts: {
    ProximaNovaRegular: 'ProximaNova-Regular',
    ProximaNovaBold: 'ProximaNova-Bold',
    ProximaNovaExtraBold: 'ProximaNova-Extrabold',
    ProximaNovaSemiBold: 'ProximaNova-Semibold',
  },
};
