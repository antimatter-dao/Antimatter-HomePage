import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useToggleStyles = makeStyles<Theme>(() => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    width: 32,
    height: 32,
    minWidth: 0,
    padding: 0,

    '& span': {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 2,
      paddingRight: 2,
    },
  },

  active: {
    '& $lineTop': {
      transform: 'translateY(4px) rotate(45deg)',
    },
    '& $lineBottom': {
      width: 28,
      transform: 'translateY(-4px) rotate(-45deg)',
    },
  },

  line: {
    width: 28,
    height: 2,
    transition: 'transform 0.2s, width 0.2s',
    transformOrigin: 'center',
    background: 'currentColor',
  },

  lineTop: {
    marginBottom: 6,
  },

  lineBottom: {
    width: 17,
  },
}));
