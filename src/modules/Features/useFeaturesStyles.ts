import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE, FONTS } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useFeaturesStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    color: PALETTE.text.primary,
    minHeight: '100vh',
    marginTop: PARALLAX_MARGIN,
    paddingBottom: theme.spacing(14),
    pointerEvents: 'auto',
    background: '#ffffff url(./images/ellipse.png) no-repeat center -15%',
    backgroundSize: '100% 50%',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 32,
    borderRadius: '0 0 60px 60px',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      height: 60,
      borderRadius: '60px 60px 0 0',
      background: '#ffffff url(./images/ellipse.png) no-repeat center 10% ',
      backgroundSize: '100% auto',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(23),
      marginLeft: 32,
      marginRight: 32,
      borderRadius: '0 0 80px 80px',
      '&::before': {
        borderRadius: '80px 80px 0 0',
      },
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    padding: '0 88px',
  },
  featuresCapsule: {
    padding: '9px 20px',
    fontSize: 20,
    borderRadius: 27,
    color: '#ffffff',
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) -48.61%, rgba(255, 255, 255, 0) 86.17%, rgba(255, 255, 255, 0.5) 219.44%), linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.4) 123.86%), #9FEA38;',
  },
  features: {
    fontSize: 24,
    fontWeight: 500,
    [theme.breakpoints.up('xl')]: { margin: '50px 10% 0' },
    '& .features': {
      fontFamily: FONTS.medium,
      fontWeight: 500,
      fontSize: 20,
      marginTop: 30,
      [theme.breakpoints.up('md')]: {
        fontWeight: 500,
        fontSize: 24,
        marginTop: 100,
      },
    },
    '& ul': {
      padding: 0,
      marginBottom: -30,
      [theme.breakpoints.up('lg')]: { marginBottom: 0 },
    },
    '& li': {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      '&::before': {
        display: 'block',
        content: `''`,
        height: 6,
        width: 6,
        backgroundColor: '#9FEA38',
        borderRadius: '50%',
        marginRight: 20,
        flexShrink: 0,
        fontWeight: 300,
      },
      fontSize: 15,
      [theme.breakpoints.up('lg')]: {
        fontSize: 16,
        marginBottom: 30,
      },
    },
  },
}));
