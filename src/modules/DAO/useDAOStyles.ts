import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useDAOStyles = makeStyles<Theme>(theme => ({
  root: {
    zIndex: 3,
    position: 'relative',
    background: '#ffffff url(./images/ellipse_pink.png) no-repeat center -90%',
    backgroundSize: '150% 80%',
    color: '#000000',
    // marginTop: PARALLAX_MARGIN,
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
      background: '#ffffff url(./images/ellipse_pink.png) no-repeat center 10%',
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
      ' linear-gradient(180deg, rgba(255, 255, 255, 0.5) -48.61%, rgba(255, 255, 255, 0) 86.17%, rgba(255, 255, 255, 0.5) 219.44%), #C07AF5',
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
        backgroundColor: '#C37FF5',
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
  screenWrap: {
    position: 'relative',
    '&::before': {
      display: 'block',
      content: `''`,
      paddingTop: '100%',
      [theme.breakpoints.down('md')]: {
        paddingTop: '50%',
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: '80%',
      },
    },
  },
  screen: {
    position: 'absolute',
    left: 50,
    top: 100,
    objectFit: 'contain',
    borderRadius: 20,
    backfaceVisibility: 'hidden',
    transformOrigin: '100% 0',
    transition: 'transform 0.5s 0.3s, opacity 0.5s 0.3s',
    '.client-side &': {
      opacity: 0,
      transform: 'translateX(40px)',
    },
    '$screenInView &': {
      opacity: 1,
      transform: 'translateX(0)',
    },
    [theme.breakpoints.down('md')]: {
      transform: 'unset',
      width: '100%',
      height: '100%',
      left: 50,
      top: 50,
    },
    [theme.breakpoints.down('sm')]: {
      width: '130%',
      height: '130%',
      marginRight: -16,
      top: -55,
      left: -40,
    },
  },
  screenInView: {},
}));
