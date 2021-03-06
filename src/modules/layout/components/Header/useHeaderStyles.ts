import { makeStyles, Theme } from '@material-ui/core';

export const HEADER_HEIGHT = 100;

export const useHeaderStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4, 0),
    background: 'transparent',
    color: theme.palette.text.primary,
    height: HEADER_HEIGHT,
  },

  container: {
    margin: 0,
    width: '100%',
    maxWidth: 'unset',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto',
    gap: theme.spacing(0, 4),
    justifyContent: 'space-between',
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: '1fr 4fr',
      justifyContent: 'initial',
      paddingLeft: theme.spacing(11.25),
      paddingRight: theme.spacing(11.25),
    },
  },

  renderMobile: {
    display: 'grid',
    alignItems: 'center',
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
  renderDesktop: {
    display: 'none',
    [theme.breakpoints.up('xl')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },

  desktopLang: {},

  links: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'center',
      gap: '40px',
    },
  },

  link: {
    color: 'inherit',
    display: 'block',
    padding: '1em',
    transition: '.2s',
    '&:hover, &:focus, &:active': {
      color: '#FF8DB5',
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      fontSize: 18,
    },
    [theme.breakpoints.up('xl')]: {
      display: 'inline-block',
      padding: '0.5em',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 15,
    },
  },

  buttons: {
    display: 'grid',
    alignItems: 'center',
    gap: theme.spacing(0, 2),
    gridTemplateColumns: 'auto',
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: 'auto auto',
    },
  },

  drawer: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  '@keyframes mobileMenuDrawerTop': {
    '0%': { opacity: 0, transform: 'translateY(-40px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  drawerTop: {
    animationName: '$mobileMenuDrawerTop',
    animationDuration: '0.3s',
    animationTimingFunction: 'linear',
    animationFillMode: 'both',
    height: HEADER_HEIGHT,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  drawerPaper: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: theme.palette.common.white,
    color: theme.palette.common.black,
  },

  '@keyframes mobileMenuDrawerBottom': {
    '0%': { opacity: 0, transform: 'translateY(40px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  drawerBottom: {
    animationName: '$mobileMenuDrawerBottom',
    animationDuration: '0.3s',
    animationTimingFunction: 'linear',
    animationFillMode: 'both',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 0, 2),
  },

  navInner: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    overflow: 'hidden',
  },

  mobileMenuDivider: {
    margin: theme.spacing(3, 5),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 3),
    },
  },

  '@keyframes mobileMenuLinks': {
    '0%': { opacity: 0, transform: 'translateX(40px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  mobileMenuLinks: {
    paddingTop: theme.spacing(2),
    '& > *': {
      [theme.breakpoints.down('md')]: {
        animationName: '$mobileMenuLinks',
        animationDuration: '0.2s',
        animationTimingFunction: 'linear',
        animationFillMode: 'both',
        '&:nth-child(1)': {
          animationDelay: '0.05s',
        },
        '&:nth-child(2)': {
          animationDelay: '0.1s',
        },
        '&:nth-child(3)': {
          animationDelay: '0.15s',
        },
        '&:nth-child(4)': {
          animationDelay: '0.2s',
        },
        '&:nth-child(5)': {
          animationDelay: '0.25s',
        },
        '&:nth-child(6)': {
          animationDelay: '0.3s',
        },
        '&:nth-child(7)': {
          animationDelay: '0.35s',
        },
        '&:nth-child(8)': {
          animationDelay: '0.4s',
        },
        '&:nth-child(9)': {
          animationDelay: '0.45s',
        },
        '&:nth-child(10)': {
          animationDelay: '0.5s',
        },
        '&:nth-child(11)': {
          animationDelay: '0.55s',
        },
        '&:nth-child(12)': {
          animationDelay: '0.6s',
        },
      },
    },
  },

  socials: {
    fontSize: 18,
  },
}));
