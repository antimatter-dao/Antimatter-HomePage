import { makeStyles, Theme } from '@material-ui/core';

export const useFooterStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    background: theme.palette.background.default,
    color: theme.palette.text.primary,

    [theme.breakpoints.up('md')]: {
      minHeight: 70,
    },
  },

  container: {
    maxWidth: 1980,
  },

  col: {
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },

  socialCol: {
    fontSize: 20,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
}));
