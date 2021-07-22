import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../theme/mainTheme';
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
    padding: 32,
  },
  features: {
    fontSize: 24,
    fontWeight: 500,
    marginTop: 0,
    [theme.breakpoints.up('lg')]: { marginTop: 100 },
    '& ul': { padding: 0 },
    '& li': {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        display: 'block',
        content: `''`,
        height: 6,
        width: 6,
        backgroundColor: '#9FEA38',
        borderRadius: '50%',
        marginRight: 20,
        flexShrink: 0,
      },
      [theme.breakpoints.up('md')]: {
        height: 70,
        fontSize: 15,
        fontWeight: 300,
      },
    },
  },
}));
