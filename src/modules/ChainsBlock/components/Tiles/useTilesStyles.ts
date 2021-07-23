import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useTilesStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    transform: 'translateY(-172px)',
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(-239px)',
      maxWidth: '80%',
    },
    margin: '0 auto',
    width: 'auto',
    justifyContent: 'center',
  },
  tileItem: {
    margin: '0 20px',
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
  },
  tileItemContent: {
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'block',
    borderRadius: 40,
    position: 'relative',
    padding: theme.spacing(3.5, 3.5),
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
    '&:hover $tileTitle': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(2.5),
      },
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4.5, 8),
      minHeight: 240,
      borderRadius: 80,
    },
  },
  tileTop: {
    fontFamily: FONTS.title,
    display: 'flex',
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
      marginTop: 20,
    },
  },
  tileContent: {
    position: 'absolute',
    opacity: 1,
    transition: '0.5s',
    bottom: theme.spacing(3.5),
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(4.5),
      opacity: 0,
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
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(4.5),
      opacity: 1,
    },
  },
  tileBtn: {
    height: 52,
    width: 156,
    marginRight: 21,
    fontSize: 16,
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      height: 60,
    },
  },
  tileMore: {
    display: 'block',
    fontSize: 16,
    padding: 0,
    height: 52,
    color: 'inherit',
    [theme.breakpoints.up('md')]: {
      height: 60,
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
}));