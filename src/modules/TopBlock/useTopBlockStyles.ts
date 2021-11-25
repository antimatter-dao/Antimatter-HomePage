import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../theme/mainTheme';

export const useTopBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    paddingLeft: 0,
    minHeight: '90vh',
    paddingBottom: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    maxWidth: '100vw',
    overflowX: 'hidden',
    width: '100%',
    margin: '0',
    // marginBottom: 170,
    transform: 'translateY(-200px)',
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
      overflowX: 'hidden',
      maxWidth: 1440,
      boxSizing: 'content-box',
      alignItems: 'center',
      margin: '0 auto',
    },
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    minWidth: '100vw',
    objectFit: 'cover',
    transform: 'translate(-50%, -80%)',
    [theme.breakpoints.up('md')]: { transform: 'translate(-50%, -60%)' },
    [theme.breakpoints.up('lg')]: {
      width: '68%',
      height: 'auto',
      minWidth: 'unset',
      transform: 'translate(13%, -55%) scale(110%)',
      left: 'unset',
      right: 0,
    },
    [theme.breakpoints.down('md')]: {
      height: '50%',
      maxHeight: '100vw',
      top: 375,
    },
  },
  hide: {
    display: 'none',
  },
  container: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      // paddingBottom: 200,
      paddingLeft: 90,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 400,
    },
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.title,
    fontWeight: 400,
    transitionDelay: '0.2s',
    '& span': {
      fontFamily: FONTS.titleBold,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 50,
      lineHeight: '66px',
      marginTop: 128,
      maxWidth: 692,
    },
  },
  text: {
    transitionDelay: '0.4s',
    marginTop: 50,
    width: '100%',
    [theme.breakpoints.down('sm')]: { marginTop: 20 },
    '&:nth-child(3)': {
      transitionDelay: '0.6s',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        marginTop: 36,
        justifyContent: 'center',
      },
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 568,
      marginTop: 50,
      paddingLeft: 50,
    },
  },
  filler: {
    height: 0,
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      height: 60,
      display: 'block',
    },
  },
  launchButton: {
    padding: '15px 66px',
    color: '#ffffff',
    margin: '0 auto',
    height: 'auto',
    width: 220,
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #000000;',
    [theme.breakpoints.up('lg')]: {
      margin: 0,
      width: 200,
      padding: '17px 45px',
    },
  },
  supportedChains: {
    width: '100%',
    paddingBottom: '60px',

    '& img': {
      margin: '0 auto',
      maxHeight: '30px',
      objectFit: 'contain',
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      padding: '0 16px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 100,
      paddingBottom: '60px',
      '& img': { padding: '0 ' },
    },
  },
  supportedChainsGrid: {
    padding: 20,
    display: 'flex',
    gridTemplateColumns: '1fr 1fr',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // gap: 30,
    '& > div': { maxWidth: '48%', minHeight: '60px' },
    [theme.breakpoints.up('md')]: {
      '& > div': { maxWidth: 'unset', minHeight: 'unset' },
      display: 'grid',
      padding: 40,
      gap: 60,
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    },
  },
}));
