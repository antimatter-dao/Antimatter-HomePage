import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useBottomBlocksStyles = makeStyles<Theme>(() => ({
  root: {
    position: 'relative',
    zIndex: 2,
    minHeight: '100vh',
    marginTop: PARALLAX_MARGIN,
    '&::after': {
      display: 'block',
      content: `''`,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 'calc(100% - 65px)',
      zIndex: 1,
      height: 110,
      backgroundColor: PALETTE.background.default,
    },
  },
  container: {
    alignItems: 'stretch',
  },
}));
