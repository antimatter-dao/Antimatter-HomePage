import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../theme/mainTheme';

export const useTopBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    minHeight: '90vh',
    paddingBottom: theme.spacing(15),
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    transform: 'translateY(-200px)',
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
      boxSizing: 'content-box',
      alignItems: 'center',
    },
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    minWidth: '100vw',
    objectFit: 'cover',
    transform: 'translate(-50%, -70%)',
    [theme.breakpoints.up('lg')]: {
      width: '75%',
      height: 'auto',
      minWidth: 'unset',
      transform: 'translate(13%, -50%)',
      left: 'unset',
      right: 0,
    },
    [theme.breakpoints.down('md')]: {
      height: '50%',
      top: 375,
    },
  },
  hide: {
    display: 'none',
  },
  container: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: 200,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 400,
    },
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.title,
    fontWeight: 400,
    marginBottom: theme.spacing(3),
    transitionDelay: '0.2s',
    '& span': {
      fontFamily: FONTS.titleBold,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 58,
      lineHeight: '66px',
      marginBottom: theme.spacing(4),
      maxWidth: 540,
    },
  },
  text: {
    transitionDelay: '0.4s',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 568,
    },
  },
  filler: {
    height: 0,
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      height: 60,
      display: 'block',
    },
  },
}));
