import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from '../theme/const';

export const useWithScrollFreezingStyles = makeStyles<Theme>(() => ({
  root: {},
  floatingWrap: {
    paddingTop: PARALLAX_MARGIN,
    transition: 'transform 0.5s, filter 0.5s',
    willChange: 'transform, filter',
    pointerEvents: 'none',
  },
  notFixed: {
    position: 'relative',
    zIndex: 2,
    transition: 'transform 0.2s, filter 0.2s',
  },
  fixed: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  chainBlockFixed: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 233,
    zIndex: 1,
  },
  fixedWithEffect: {
    filter: 'grayscale(0.5)',
    pointerEvents: 'none',
    '& *': {
      pointerEvents: 'none !important',
    },
  },
}));
