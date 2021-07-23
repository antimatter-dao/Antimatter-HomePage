import {
  createMuiTheme,
  darken,
  fade,
  lighten,
  ThemeOptions,
} from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { BREAKPOINTS, BTN_TRANSITION_TIME } from './const';

const TEN_SECONDS = 10 * 1000;

export const FONTS = {
  primary: ['"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  medium: [
    '"Helvetica Neue Medium"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  bold: [
    '"Helvetica Neue Bold"',
    '"Helvetica Neue Medium"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  title: 'Monument Extended Regular',
  titleBold: 'Monument Extended Bold',
};

export const PALETTE = {
  primary: {
    light: lighten('#0075FF', 0.1),
    main: '#0075FF',
    dark: darken('#0075FF', 0.2),
  },
  background: {
    default: '#EDEDED',
    paper: '#fff',
    reverse: '#000',
  },
  text: {
    primary: '#000000',
    secondary: '#000',
    darkGray: '#232323',
    light: '#fff',
    reverse: '#000',
  },
  warning: {
    main: '#FFB63C',
  },
  success: {
    main: '#36C98E',
  },
  grey: {
    300: '#F1F1F1',
  },
};

export const defaultTheme = createMuiTheme({
  spacing: 8,
  palette: PALETTE as PaletteOptions,
  breakpoints: BREAKPOINTS,
});

export const mainTheme = createMuiTheme({
  spacing: defaultTheme.spacing,
  palette: defaultTheme.palette,
  breakpoints: defaultTheme.breakpoints,

  typography: {
    fontFamily: FONTS.primary,
    color: PALETTE.text.primary,
  },

  props: {
    MuiContainer: {
      maxWidth: 'xl',
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      variant: 'contained',
      disableElevation: true,
    },
    MuiTooltip: {
      enterTouchDelay: 0,
      leaveTouchDelay: TEN_SECONDS,
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          color: 'inherit',
          fontSize: 'inherit',
          textDecoration: 'none',
          transition: 'color 0.2s',

          '&:hover': {
            color: 'inherit',
          },
        },
        '::selection': {
          background: PALETTE.background.reverse,
          color: PALETTE.text.light,
          textShadow: 'none',
        },
      },
    },

    MuiContainer: {
      root: {
        maxWidth: 1440,
        paddingLeft: defaultTheme.spacing(4),
        paddingRight: defaultTheme.spacing(4),
        [defaultTheme.breakpoints.up('sm')]: {
          paddingLeft: defaultTheme.spacing(6),
          paddingRight: defaultTheme.spacing(6),
        },
        [defaultTheme.breakpoints.up('md')]: {
          paddingLeft: defaultTheme.spacing(8),
          paddingRight: defaultTheme.spacing(8),
        },
        [defaultTheme.breakpoints.up('xl')]: {
          paddingLeft: defaultTheme.spacing(16.25),
          paddingRight: defaultTheme.spacing(16.25),
        },
      },
    },

    MuiTypography: {
      root: {
        '& b, & strong': {
          fontFamily: FONTS.bold,
          fontWeight: 700,
        },
        '& a': {
          '&:hover': {
            color: PALETTE.text.primary,
          },
        },
      },

      h1: {
        fontFamily: FONTS.medium,
        fontWeight: 500,
        fontSize: 36,
      },

      h2: {
        fontFamily: FONTS.medium,
        fontWeight: 500,
        fontSize: 28,

        [defaultTheme.breakpoints.up('md')]: {
          fontSize: 32,
        },
      },

      h3: {
        fontFamily: FONTS.medium,
        fontWeight: 500,
        fontSize: 18,

        [defaultTheme.breakpoints.up('md')]: {
          fontSize: 22,
        },
      },

      h4: {
        fontSize: 18,
        fontFamily: FONTS.medium,
        fontWeight: 500,
      },

      h5: {
        fontSize: 15,
        fontFamily: FONTS.bold,
        fontWeight: 700,
      },

      body1: {
        fontSize: 16,

        [defaultTheme.breakpoints.up('md')]: {
          fontSize: 18,
        },
      },

      body2: {
        fontSize: 13,
        fontWeight: 500,
      },
    },

    MuiButtonBase: {
      root: {
        '&:active': {
          transform: 'translateY(1px)',
        },
      },
    },

    MuiIconButton: {
      root: {
        border: `1px solid ${fade(defaultTheme.palette.common.black, 0.1)}`,
        color: defaultTheme.palette.text.primary,
        transition: `border ${BTN_TRANSITION_TIME}s`,

        '&:hover': {
          borderColor: fade(defaultTheme.palette.common.black, 0.3),
          backgroundColor: 'none',
        },
      },
    },

    MuiButton: {
      root: {
        borderRadius: 32,
        height: 32,
        padding: defaultTheme.spacing(0, 1.5),
        textTransform: 'none',
        fontWeight: 400,
        fontSize: 14,
        boxShadow: 'none',
        [defaultTheme.breakpoints.up('md')]: {
          borderRadius: 42,
          height: 42,
          padding: defaultTheme.spacing(0, 3),
        },
      },

      label: {
        position: 'relative',
      },

      sizeLarge: {
        height: 48,
      },

      contained: {
        border: 'none',
        backgroundColor: defaultTheme.palette.common.white,
        color: defaultTheme.palette.common.black,
        transition: `color ${BTN_TRANSITION_TIME}s`,
        overflow: 'hidden',
        '&:before': {
          content: `''`,
          position: 'absolute',
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          width: 'auto',
          height: 'auto',
          background: defaultTheme.palette.common.black,
          transition: `transform ${BTN_TRANSITION_TIME}s cubic-bezier(0.7, 0, 0.2, 1)`,
          transform: 'translateY(100%)',
        },

        '&:hover': {
          color: defaultTheme.palette.common.white,

          '&:before': {
            transform: 'translateY(0)',
          },
        },
      },

      text: {
        height: 26,
        '&:hover': {
          backgroundColor: 'transparent',
        },
        [defaultTheme.breakpoints.up('md')]: {
          height: 32,
        },
      },
    },
  },
} as ThemeOptions);
