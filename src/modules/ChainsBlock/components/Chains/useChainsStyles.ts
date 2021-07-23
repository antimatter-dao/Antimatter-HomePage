import { fade, makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useChainsStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    paddingBottom: theme.spacing(6),
    width: '100%',
    maxWidth: '100%',
    // borderBottom: `1px solid ${fade(theme.palette.common.white, 0.5)}`,
    [theme.breakpoints.up('xl')]: {
      borderBottom: 'none',
      minHeight: 200,
      display: 'grid',
      gridTemplateRows: '1fr auto',
    },
    transform: 'translateY(-102px)',
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(-159px)',
    },
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
      top: 390,
      marginLeft: 60,
      maxWidth: 'unset',
    },
    [theme.breakpoints.up('lg')]: {
      top: 120,
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
    transform: 'translateY(30px)',
    position: 'absolute',
    top: '5%',
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
    // [theme.breakpoints.up('xl')]: {
    //   width: 'auto',
    //   height: 'auto',
    // },
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
    [theme.breakpoints.up(1440)]: {
      transform: 'translateX(50px)',
    },
    '& $item': {
      opacity: 1,
      '&:nth-child(1)': {
        top: '0',
        left: '90%',
        height: 105,
        width: 105,
      },
      '&:nth-child(2)': {
        top: '30%',
        left: '70%',
        height: 142,
        width: 142,
      },
      '&:nth-child(3)': {
        top: '80%',
        left: '45%',
        height: 73,
        width: 73,
      },
      '&:nth-child(4)': {
        top: '120%',
        left: '60%',
        height: 73,
        width: 73,
      },
      '&:nth-child(5)': {
        top: '95%',
        left: '80%',
        height: 96,
        width: 96,
      },
      '&:nth-child(6)': {
        top: '70%',
        left: '96%',
        height: 69,
        width: 69,
      },
    },
  },

  itemsMobile: {
    transform: 'translateY(145px) scale(90%)',
    position: 'relative',
    margin: '0 auto',
    maxWidth: 900,
    '&:before': {
      display: 'block',
      content: `''`,
      paddingTop: '66.66%',
    },
  },
  itemsMobileInView: {
    '& $item': {
      opacity: 1,
      '&:nth-child(1)': {
        top: '50%',
        left: '70%',
        height: 72,
        width: 72,
      },
      '&:nth-child(2)': {
        top: '60%',
        left: '30%',
        height: 96,
        width: 96,
      },
      '&:nth-child(3)': {
        top: '15%',
        left: '96%',
        height: 52,
        width: 52,
      },
      '&:nth-child(4)': {
        top: '85%',
        left: '5%',
        height: 50,
        width: 50,
      },
      '&:nth-child(5)': {
        top: '95%',
        left: '50%',
        height: 66,
        width: 66,
      },
      '&:nth-child(6)': {
        top: '75%',
        left: '85%',
        height: 70,
        width: 70,
      },
    },
  },
}));
