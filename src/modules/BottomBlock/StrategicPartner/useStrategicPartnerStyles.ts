import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../theme/mainTheme';

export const useStrategicPartnerStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    zIndex: 2,
    padding: theme.spacing(8, 0),
    background: '#232323',
    borderRadius: '30px',
    maxWidth: 1440,
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      paddingTop: 100,
      minHeight: 'unset',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 120,
      borderRadius: '120px',
    },
  },
  '@keyframes roll': {
    '0%': {
      transform: 'translateX(0%)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
  marquee: {
    display: 'flex',
    width: 'max-content',
    willChange: 'transform, opacity',
    opacity: 0.8,
    animation: '$roll 20s infinite linear',
    gap: 20,
    transitionDelay: '0.3s',
    '& img': {
      maxHeight: '100%',
      objectFit: 'cover',
    },
  },
  marqueeInView: {
    opacity: 1,
  },
  marqueeWrapper: {
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.title,
    fontWeight: 500,
    marginBottom: theme.spacing(8),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('md')]: {
      fontSize: 44,
      lineHeight: '66px',
      marginBottom: 150,
      marginTop: 14,
    },
  },
  imgWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
    padding: 0,
    [theme.breakpoints.up('md')]: { padding: theme.spacing(2), minHeight: 100 },
    [theme.breakpoints.down('md')]: {
      '&:nth-child(3n+1)': {
        transitionDelay: 0,
      },
      '&:nth-child(3n+2)': {
        transitionDelay: '0.3s',
      },
      '&:nth-child(3n+3)': {
        transitionDelay: '0.6s',
      },
    },
  },
  img: {
    maxWidth: '70%',
    height: 'auto',
    [theme.breakpoints.up('md')]: { maxWidth: '100%' },
  },

  name: {
    fontFamily: FONTS.title,
    display: 'block',
    marginTop: 10,
    textAlign: 'center',
  },
}));
