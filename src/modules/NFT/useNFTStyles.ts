import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../theme/mainTheme';
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
    borderRadius: '0 0 30px 30px',
    marginBottom: 32,
    maxWidth: 1440,
    width: '100%',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: 'rgba(35, 35, 35, 1)',
      height: 60,
      borderRadius: '30px 30px 0 0',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(23),
      borderRadius: '0 0 120px 120px',
      marginLeft: 'auto',
      marginRight: 'auto',
      '&::before': {
        borderRadius: '120px 120px 0 0 ',
        top: -119,
        height: 120,
      },
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  topContainer: {
    [theme.breakpoints.up('lg')]: {
      padding: '0 88px',
      transform: 'translateY(-50px)',
    },
  },
  NFTCapsule: {
    padding: '9px 10px',
    fontSize: 12,
    borderRadius: 27,
    width: 184,
    textAlign: 'center',
    color: '#ffffff',
    whiteSpace: 'nowrap',
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) -48.61%, rgba(255, 255, 255, 0) 86.17%, rgba(255, 255, 255, 0.5) 219.44%), #FF8DB5;',
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      width: 226,
    },
  },
  features: {
    '& .features': {
      fontFamily: FONTS.medium,
      fontWeight: 500,
      fontSize: 20,
      [theme.breakpoints.up('md')]: {
        fontWeight: 500,
        fontSize: 24,
        marginTop: 47,
      },
    },
    '& ul': { padding: 0 },
    '& li': {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        display: 'block',
        content: `''`,
        height: 6,
        width: 6,
        backgroundColor: '#FF8DB5',
        borderRadius: '50%',
        marginRight: 20,
        flexShrink: 0,

        fontWeight: 300,
      },
      fontSize: 15,
      marginTop: 30,
      [theme.breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
  },
  image: {
    [theme.breakpoints.up('md')]: {
      top: 120,
    },
  },
}));
