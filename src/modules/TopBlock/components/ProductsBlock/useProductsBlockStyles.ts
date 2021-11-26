import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useProductsBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: '30px 0 0',
    background: 'url(/images/ellipse_green.svg) center 70% no-repeat',
    backgroundSize: '160% 100%',
    gap: '108px',
    maxWidth: '100vw',
    overflowX: 'visible',
    [theme.breakpoints.down('md')]: {
      backgroundSize: '700% 100%',
      padding: '0',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-75px',
    },
  },
  title: {
    fontSize: 44,
    fontFamily: FONTS.title,
    fontWeight: 400,
    padding: '0 16px',
    margin: '39px auto',
    [theme.breakpoints.down('md')]: {
      fontSize: 23,
      margin: '39px 0 92px',
      textAlign: 'center',
      '& img': {
        width: 21,
      },
    },
  },
}));
