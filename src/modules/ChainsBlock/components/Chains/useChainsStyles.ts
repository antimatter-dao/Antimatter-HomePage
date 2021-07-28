import { fade, makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useChainsStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    height: 'calc(100% - 130px)',
    [theme.breakpoints.up('lg')]: { height: '100%' },
  },
  title: {
    position: 'absolute',
    fontFamily: FONTS.title,
    fontWeight: 500,
    fontSize: 24,
    marginLeft: 20,
    top: 250,
    maxWidth: 328,
    [theme.breakpoints.up('md')]: {
      fontSize: 44,
      top: 300,
      marginLeft: 60,
      maxWidth: 'unset',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 44,
      top: 90,
      marginLeft: 60,
      maxWidth: 'unset',
    },
  },
  text: {
    marginTop: 16,
    fontSize: 15,
    maxWidth: 328,
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      maxWidth: 480,
      marginTop: 42,
      fontSize: 16,
    },
  },
  itemsDesktop: {
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
  },
  item: {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div, & > div > div': {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& svg': {
      height: '60%',
      width: '60%',
    },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'top 1s 0.4s, left 1s 0.4s, opacity 0.3s 0.4s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
    '.client-side &': {
      opacity: 0,
    },
    '&:hover': {
      zIndex: 1,
    },
  },
  itemsDesktopInView: {
    '& $item': {
      opacity: 1,
      '&:nth-child(1)': {
        top: 90,
        left: '90%',
        height: 105,
        width: 105,
      },
      '&:nth-child(2)': {
        top: '40%',
        left: '70%',
        height: 142,
        width: 142,
      },
      '&:nth-child(3)': {
        top: '75%',
        left: '50%',
        height: 73,
        width: 73,
      },
      '&:nth-child(4)': {
        top: '96%',
        left: '65%',
        height: 73,
        width: 73,
      },
      '&:nth-child(5)': {
        top: '75%',
        left: '82%',
        height: 96,
        width: 96,
      },
      '&:nth-child(6)': {
        top: '63%',
        left: '98%',
        height: 69,
        width: 69,
      },
    },
  },
  itemsMobile: {
    height: '100%',
    transform: 'translateX(10px) scale(96%)',
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      transform: 'translateY(-30%)',
    },
  },
  itemsMobileInView: {
    '& $item': {
      opacity: 1,
      '&:nth-child(1)': {
        top: 300,
        left: '80%',
        height: 72,
        width: 72,
      },
      '&:nth-child(2)': {
        top: 350,
        left: '30%',
        height: 96,
        width: 96,
      },
      '&:nth-child(3)': {
        top: 100,
        left: 'unset',
        right: -20,
        height: 52,
        width: 52,
      },
      '&:nth-child(4)': {
        top: '70%',
        left: 0,
        height: 50,
        width: 50,
      },
      '&:nth-child(5)': {
        top: '85%',
        left: '55%',
        height: 66,
        width: 66,
      },
      '&:nth-child(6)': {
        top: '60%',
        left: 'unset',
        right: -10,
        height: 47,
        width: 47,
      },
    },
  },
}));
