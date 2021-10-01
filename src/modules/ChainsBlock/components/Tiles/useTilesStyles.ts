import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useTilesStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    transform: 'translateY(-328px)',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      transform: 'translateY(-239px)',
      maxWidth: '90%',
    },
    margin: '0 auto',
    width: 'auto',
    justifyContent: 'center',
  },
  tileItem: {
    margin: '0 16px',
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
      transitionDelay: '0.3s',
    },
    '&:nth-child(3)': {
      transitionDelay: '0.6s',
    },
  },
  tileItemContent: {
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'block',
    borderRadius: 40,
    position: 'relative',
    padding: '24px 18px',
    height: '100%',
    minHeight: 160,
    overflow: 'hidden',
    textDecoration: 'none',
    cursor: 'default',
    '&:hover': {
      background: '#ffffff url(./images/ellipse.png) no-repeat center 80%',
    },
    '&:hover $tileCount': {
      opacity: 0,
    },
    '&:hover $tileContent': {
      opacity: 1,
    },
    '&:hover $tileTop': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(2.5),
      },
    },
    [theme.breakpoints.up('md')]: { padding: '24px 36px' },
    [theme.breakpoints.up('lg')]: {
      padding: '36px 48px',
      minHeight: 240,
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
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
    [theme.breakpoints.up('lg')]: {
      whiteSpace: 'pre-wrap',
    },
    [theme.breakpoints.up('xl')]: {
      whiteSpace: 'nowrap',
    },
  },
  tileCount: {
    position: 'absolute',
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
    '& svg': {
      marginLeft: 10,
      transform: 'scale(80%)',
    },
    [theme.breakpoints.up('md')]: {
      height: 60,
      '& svg': {
        width: 'auto',
      },
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
  gradientPurple: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #C88AF6',
  },
}));
