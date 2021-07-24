import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../../../theme/mainTheme';

export const useSideContentStyles = makeStyles<Theme>(theme => ({
  root: {
    marginTop: 60,
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
      paddingRight: 60,
    },
  },

  brand: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing(2.6),
    [theme.breakpoints.up('lg')]: {
      marginBottom: 20,
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
    fontSize: 24,
    fontFamily: FONTS.title,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('lg')]: {
      fontSize: 44,
      lineHeight: '132%',
      marginBottom: theme.spacing(4),
      width: 580,
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
    marginBottom: theme.spacing(2),
    fontSize: 15,
    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
      marginBottom: theme.spacing(4),
    },
  },

  btnWrap: {
    transitionDelay: '0.6s',
  },
  btn: {
    minWidth: 220,
  },
}));
