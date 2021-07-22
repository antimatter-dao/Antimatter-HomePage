import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useChainsBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: PALETTE.text.light,
    margin: `${-PARALLAX_MARGIN}px 0`,
    borderRadius: 0,
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#232323',
      height: 60,
      borderRadius: '60px 60px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '0 0 80px 80px',
      '&::before': {
        borderRadius: '80px 80px 0 0',
      },
    },
    [theme.breakpoints.up('lg')]: {
      margin: `${-PARALLAX_MARGIN}px 32px`,
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  container: {
    padding: 0,
  },
}));
