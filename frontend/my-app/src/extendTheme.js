import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#f77070',
    },
    primary: {
      100: '#FDE1DB',
      200: '#FCBEB8',
      300: '#F89394',
      400: '#F17683',
      500: '#E84B6A',
      600: '#C73661',
      700: '#A72557',
      800: '#86174D',
      900: '#6F0E46',
    },
    grey: {
      100: '#eff3fa',
    },
    blue: {
      100: '#0098ae',
    },
    red: {
      100: '#ff3d3d',
      200: '#f77070'
    },
  },
  fonts: {
    body: 'Graphik Font',
    heading: 'Graphik Font',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});

export default customTheme;