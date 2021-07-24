import { makeStyles, Theme } from '@material-ui/core';

export const useSideScreenStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(4.5),
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(5),
      height: '100%',
    },
  },
  screenWrap: {
    position: 'relative',
    '&::before': {
      display: 'block',
      content: `''`,
      paddingTop: '100%',
    },
  },
  screenInView: {},
  screen: {
    position: 'absolute',
    top: 20,
    height: '68%',
    objectFit: 'cover',
    borderRadius: 20,
    backfaceVisibility: 'hidden',
    transformOrigin: '100% 0',
    transition: 'transform 0.5s 0.3s, opacity 0.5s 0.3s',
    '.client-side &': {
      opacity: 0,
      transform: 'translateX(40px)',
    },
    '$screenInView &': {
      opacity: 1,
      transform: 'translateX(0)',
    },
    [theme.breakpoints.down('md')]: {
      transform: 'unset',
    },
    [theme.breakpoints.up('md')]: {
      left: 100,
      top: 94,
    },
  },
}));
