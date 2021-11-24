import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useDAOStyles = makeStyles<Theme>(theme => ({
  root: {
    zIndex: 3,
    position: 'relative',
    background: '#ffffff url(./images/ellipse_blue.png) no-repeat center -90%',
    backgroundSize: '150% 80%',
    color: '#000000',
    minHeight: '100vh',
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    borderRadius: '0 0 30px 30px',
    marginBottom: 30,
    maxWidth: 1440,
    width: '100%',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#ffffff url(./images/ellipse_blue.png) no-repeat center 10%',
      backgroundSize: '150% auto',
      height: 60,
      borderRadius: '30px 30px 0 0',
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 60,
      minHeight: 'unset',
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
  DAOCapsule: {
    padding: '9px 20px',
    fontSize: 12,
    borderRadius: 27,
    color: '#ffffff',
    width: 184,
    textAlign: 'center',
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) -48.61%, rgba(255, 255, 255, 0) 86.17%, rgba(255, 255, 255, 0.5) 219.44%), #44D8BF',
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
        backgroundColor: '#63B6E4',
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
    filter: 'drop-shadow(0px 1px 25px rgba(11, 16, 61, 0.1))',
    [theme.breakpoints.up('md')]: {
      top: 120,
    },
  },
}));
