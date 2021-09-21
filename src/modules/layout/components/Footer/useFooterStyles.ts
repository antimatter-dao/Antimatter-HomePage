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
    paddingLeft: 32,
    paddingRight: 32,
  },

  col: {
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },

  socialCol: {
    fontSize: 20,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  disclaimer: {
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));
