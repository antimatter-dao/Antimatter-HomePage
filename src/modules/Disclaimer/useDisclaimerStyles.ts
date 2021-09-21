import { makeStyles } from '@material-ui/core';
import { FONTS, PALETTE } from '../theme/mainTheme';

export const useDisclaimerStyles = makeStyles({
  root: {
    backgroundColor: PALETTE.background.default,
    padding: '100px 10%',
  },
  wrapper: {
    maxWidth: 1440,
    margin: '0 auto',
  },
  title: {
    fontFamily: FONTS.titleBold,
    fontSize: 32,
    marginBottom: 40,
  },
});
