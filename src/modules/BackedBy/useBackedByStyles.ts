import { makeStyles, Theme } from '@material-ui/core';
import { defaultTheme, FONTS } from '../theme/mainTheme';

export const useBackedByStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    zIndex: 3,
    padding: theme.spacing(8, 0),
    backgroundColor: defaultTheme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
      paddingTop: theme.spacing(10),
    },
  },
  container: {},
  title: {
    fontSize: 28,
    fontFamily: FONTS.medium,
    fontWeight: 500,
    marginBottom: theme.spacing(8),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('md')]: {
      fontSize: 58,
      lineHeight: '66px',
      marginBottom: theme.spacing(14),
    },
  },
  hr: {
    background: '#C4C4C4',
    opacity: 0.2,
    margin: theme.spacing(5, 0),
  },
  imgWrap: {
    display: 'flex',
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
}));
