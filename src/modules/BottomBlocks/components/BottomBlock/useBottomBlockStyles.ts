import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../../../theme/mainTheme';

export const useBottomBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    zIndex: 4,
    backgroundColor: '#FF699F',
    color: '#7B2141',
    paddingTop: theme.spacing(5.5),
    paddingBottom: theme.spacing(20),
    height: '100%',
    minHeight: '100vh',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#FF699F',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(10),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 0,
      borderRadius: '0 0 0 60px',
      '&::before': {
        borderRadius: '60px 0 0 0',
      },
    },
  },

  container: {},

  tileTop: {
    display: 'flex',
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(7.5),
  },
  tileComingSoon: {
    fontSize: 12,
    fontFamily: FONTS.bold,
    fontWeight: 700,
    display: 'inline-block',
  },

  brand: {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  brandLogo: {
    fontSize: 30,
    marginRight: theme.spacing(4),
  },
  brandName: {
    fontSize: 24,
  },
  brandContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
    },
  },

  title: {
    fontSize: 28,
    fontFamily: FONTS.medium,
    fontWeight: 500,
    marginBottom: theme.spacing(7),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
      lineHeight: '54px',
    },
  },
  text: {
    fontSize: 18,
    transitionDelay: '0.4s',
    marginBottom: theme.spacing(4),
  },

  btnWrap: {
    transitionDelay: '0.6s',
  },
  btn: {
    minWidth: 220,
  },

  secondStyles: {
    zIndex: 5,
    backgroundColor: '#F4EDA8',
    color: PALETTE.text.darkGray,
    borderRadius: '0 0 28px 28px',
    '&::before': {
      backgroundColor: '#F4EDA8',
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '0 0 60px 60px',
    },
    [theme.breakpoints.up('lg')]: {
      borderRadius: '0 0 60px 0',
      '&::before': {
        borderRadius: '0 60px 0 0',
      },
    },
  },
}));
