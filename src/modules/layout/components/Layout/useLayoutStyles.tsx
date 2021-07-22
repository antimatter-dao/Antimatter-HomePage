import { makeStyles, Theme } from '@material-ui/core/styles';
import { FONTS, PALETTE } from '../../../theme/mainTheme';

export const useLayoutStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    minWidth: 375,

    fontFamily: FONTS.primary,

    background: theme.palette.background.default,
    color: PALETTE.text.primary,
  },

  noJs: {
    display: 'block',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#a70000',
    color: '#fff',
  },

  main: {
    flexGrow: 1,
    position: 'relative',
  },
}));
