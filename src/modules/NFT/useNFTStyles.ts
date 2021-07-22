import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useNFTStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: 'rgba(35, 35, 35, 1)',
    color: '#ffffff',
    minHeight: '100vh',
    marginTop: PARALLAX_MARGIN,
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    borderRadius: '0 0 60px 60px',
    marginBottom: 32,
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: 'rgba(35, 35, 35, 1)',
      height: 60,
      borderRadius: '60px 60px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      marginLeft: 32,
      marginRight: 32,
      borderRadius: '0 0 80px 80px',
      '&::before': {
        borderRadius: '80px 80px 0 0 ',
      },
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  topContainer: {
    paddingRight: 0,
  },
  NFTCapsule: {
    padding: '9px 20px',
    fontSize: 20,
    borderRadius: 27,
    color: '#ffffff',
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) -48.61%, rgba(255, 255, 255, 0) 86.17%, rgba(255, 255, 255, 0.5) 219.44%), #FF8DB5;',
  },
}));
