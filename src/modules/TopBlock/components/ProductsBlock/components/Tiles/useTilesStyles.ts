import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../../../theme/mainTheme';

export const useTilesStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    margin: '0 auto',
    justifyContent: 'flex-start',
    padding: '0 16px',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  tileItem: {
    [theme.breakpoints.up('lg')]: {
      margin: 0,
    },
    [theme.breakpoints.up('xl')]: {
      '&&': {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    '&:nth-child(2)': {
      transitionDelay: '0.1s',
    },
    '&:nth-child(3)': {
      transitionDelay: '0.2s',
    },
  },
  tileItemContent: {
    backgroundColor: '#232323',
    color: '#ffffff',
    display: 'block',
    borderRadius: 40,
    position: 'relative',
    padding: '24px 18px',
    height: '100%',
    minHeight: 240,
    overflow: 'hidden',
    textDecoration: 'none',
    cursor: 'default',
    '& p': {
      fontSize: 15,
      opacity: 0.5,
    },
    '&:hover $tileCount': {
      opacity: 0,
    },
    '&:hover $tileContent': {
      opacity: 1,
    },
    [theme.breakpoints.up('md')]: {
      padding: '24px 36px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '36px 48px',
      maxWidth: 380,
      minHeight: 340,
      borderRadius: 80,
    },
  },
  tileTop: {
    fontFamily: FONTS.title,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
  tileCount: {
    position: 'absolute',
    color: '#232323',
    fontFamily: FONTS.primary,
    fontWeight: 500,
    fontSize: 20,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s',
    width: 60,
    height: 60,
    opacity: 0,
    bottom: theme.spacing(3.5),
    [theme.breakpoints.up('lg')]: {
      bottom: theme.spacing(4.5),
      opacity: 1,
    },
  },
  tileContent: {
    position: 'absolute',
    opacity: 1,
    transition: '0.5s',
    bottom: 24,
    [theme.breakpoints.up('lg')]: {
      bottom: theme.spacing(4.5),
      opacity: 0,
    },
  },
  tileBtn: {
    height: 52,
    width: 156,
    marginRight: 21,
    fontSize: 16,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      height: 45,
      width: 240,
    },
    [theme.breakpoints.up('lg')]: {
      height: 40,
      width: 140,
    },
  },
  tileMore: {
    whiteSpace: 'nowrap',
    display: 'block',
    fontSize: 16,
    padding: 0,
    height: 52,
    color: 'inherit',
    '&:hover': {
      opacity: 0.6,
    },
  },
  gradientRed: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #FF8DB5',
  },
  gradientGreen: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #9FEA38',
  },
  gradientBlue: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #44D8BF',
  },
}));
