import { makeStyles, Theme } from '@material-ui/core';

export const useProductMenuStyles = makeStyles<Theme>(theme => ({
  mainLink: {
    '& svg': {
      alignSelf: 'center',
    },
  },
  link: {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 15,
    },
    '& svg': {
      marginRight: 16,
      height: 18,
      width: 18,
    },
  },
  icon: {
    marginLeft: 12,
    fontSize: 10,
  },
  menu: {
    '& .MuiMenu-paper': {
      borderRadius: 13,
      overflow: 'hidden',
      boxShadow: 'unset',
    },
  },
  menuItem: {
    color: theme.palette.text.primary,
    fontSize: 14,
    padding: theme.spacing(2, 5),
    '& svg': {
      marginRight: 16,
      height: 18,
      width: 18,
    },
    '&:hover': {
      '& svg': {
        fill: '#9FEA38',
        color: '#9FEA38',
      },
    },
  },
}));
