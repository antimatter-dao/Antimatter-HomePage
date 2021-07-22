import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../../../theme/mainTheme';

export const useSideContentStyles = makeStyles<Theme>(theme => ({
  root: {
    marginTop: theme.spacing(4.5),
    color: ({ isWhite }: { isWhite?: boolean }) =>
      isWhite ? '#ffffff' : PALETTE.text.primary,
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(12.5),
    },
  },

  brand: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7.5),
    },
  },
  brandLogo: {
    fontSize: 37,
    marginRight: theme.spacing(4),
  },
  brandName: {
    fontSize: 18,
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },

  title: {
    fontSize: 48,
    fontFamily: FONTS.medium,
    fontWeight: 500,
    marginBottom: theme.spacing(5),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('lg')]: {
      fontSize: 58,
      lineHeight: '66px',
      marginBottom: theme.spacing(4),
      maxWidth: 540,
    },
  },
  titleSm: {
    fontSize: 30,
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
      lineHeight: '54px',
    },
  },
  text: {
    transitionDelay: '0.4s',
    marginBottom: theme.spacing(4),
  },

  btnWrap: {
    transitionDelay: '0.6s',
  },
  btn: {
    minWidth: 220,
  },
}));
