import { makeStyles, Theme } from '@material-ui/core';

export const useWithAnimationStyles = makeStyles<Theme>(() => ({
  awaitInView: {
    transformOrigin: '0 100%',
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.5s',
    '.client-side &': {
      opacity: 0,
      transform: 'translateY(20px) rotateZ(3deg)',
    },
  },
  inView: {
    '&&': {
      opacity: 1,
      transform: 'translateY(0) rotateZ(0)',
    },
  },
}));
