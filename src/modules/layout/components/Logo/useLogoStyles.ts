import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useLogoStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    color: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      color: 'inherit',
    },
  },

  img: {
    height: 24,
    marginRight: theme.spacing(2),
  },
  name: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    fontWeight: 700,
  },
}));
