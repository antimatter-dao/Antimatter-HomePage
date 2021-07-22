import { makeStyles, Theme } from '@material-ui/core';

export const useProductsMenuStyles = makeStyles<Theme>(theme => ({
  link: {
    whiteSpace: 'nowrap',
  },
  icon: {
    marginLeft: 12,
    fontSize: 10,
  },
  menu: {},
  menuItem: {
    color: theme.palette.text.primary,
    fontSize: 14,
    padding: theme.spacing(2, 3),
  },
}));
