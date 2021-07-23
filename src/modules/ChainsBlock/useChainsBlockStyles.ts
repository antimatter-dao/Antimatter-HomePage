import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useChainsBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: PALETTE.text.light,
    margin: `${-PARALLAX_MARGIN}px 0`,
    maxWidth: '100%',
    borderRadius: ' 0 0 60px 60px ',
    pointerEvents: 'auto',
    minHeight: '100vh',
    '&::before': {
      content: `''`,
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#232323',
      height: 60,
      borderRadius: '60px 60px 0 0',
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 'unset',
      margin: `${-PARALLAX_MARGIN}px 32px`,
      borderRadius: '0 0 120px 120px',
      '&::before': {
        display: 'block',
        borderRadius: '120px 120px 0 0',
        top: -119,
        height: 120,
      },
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  container: {
    padding: 0,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      overflow: 'visible',
    },
  },
}));
