import { makeStyles, Theme } from '@material-ui/core';
import { url } from 'inspector';
import { PARALLAX_MARGIN } from '../theme/const';
import { FONTS } from '../theme/mainTheme';

export const useBackedByStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    zIndex: 2,
    padding: theme.spacing(8, 0),
    background: '#ffffff url(./images/ellipse_blue.svg) no-repeat center -350%',
    backgroundSize: '500% 90%',
    minHeight: '100vh',
    maxWidth: 1440,
    borderRadius: '30px',
    paddingBottom: 120 + PARALLAX_MARGIN,
    [theme.breakpoints.up('lg')]: {
      // paddingBottom: 120,
      paddingBottom: 200,
      paddingTop: 100,
      minHeight: 'unset',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: '120px',
      background:
        '#ffffff url(./images/ellipse_blue.svg) no-repeat center 460%',
      backgroundSize: '200% 90%',
    },
  },
  container: {},
  title: {
    fontSize: 24,
    fontFamily: FONTS.title,
    fontWeight: 500,
    marginBottom: theme.spacing(8),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('md')]: {
      fontSize: 44,
      lineHeight: '66px',
      marginBottom: theme.spacing(10),
    },
  },
  imgWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    padding: theme.spacing(2),
    '&:nth-child(2n)': {
      transitionDelay: '0.3s',
    },
    [theme.breakpoints.up('md')]: {
      '&:nth-child(3n+1)': {
        transitionDelay: 0,
      },
      '&:nth-child(3n+2)': {
        transitionDelay: '0.3s',
      },
      '&:nth-child(3n+3)': {
        transitionDelay: '0.6s',
      },
    },
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  profile: {
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 72,
    },
  },

  name: {
    fontFamily: FONTS.title,
    display: 'block',
    marginTop: 10,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  filler: {
    position: 'relative',
    '&::before': {
      position: 'absolute',
      top: '-25vh',
      content: `''`,
      height: '100vh',
      width: '100%',
      zIndex: 1,
      display: 'block',
      [theme.breakpoints.up('lg')]: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  twitter: {
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    padding: 0,
    marginLeft: 8,
    height: 16,
    width: 16,
    minWidth: 'unset',
    '& img': {
      position: 'absolute',
      left: 0,
      width: '100%',
      height: 'auto',
      opacity: 1,
      '&:first-child': {
        opacity: 0,
      },

      transition: '0.5s',
    },
    '&:hover, &:active': {
      '& img:first-child': {
        opacity: 1,
      },
      '& img:last-child': {
        opacity: 0,
      },
    },
  },
}));
