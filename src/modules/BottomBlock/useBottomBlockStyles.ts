import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../theme/mainTheme';

export const useBottomBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    color: PALETTE.text.light,
    margin: '0 auto',
    pointerEvents: 'auto',
    maxWidth: '100vw',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.default,
    zIndex: 2,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1440,
      width: '100%',
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  '@keyframes breathe': {
    '0%': {
      transform: 'translateX(-50%) scale(100%)',
    },
    '100%': {
      transform: 'translateX(-50%) scale(70%)',
    },
  },
  blog: {
    minHeight: 318,
    height: '100%',
    position: 'relative',
    '&::before': {
      content: `''`,
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      position: 'absolute',
      width: '50%',
      height: '20%',
      background: '#F3BA2F',
      filter: 'blur(80px)',
      opacity: 0.9,
      borderRadius: 120,
      transformOrigin: 'center center',
      animation: '$breathe 5s infinite alternate ease-in-out',
    },
    [theme.breakpoints.up('lg')]: {
      height: 550,
    },
    [theme.breakpoints.down('sm')]: {
      '&::before': {
        opacity: 0.5,
        width: '100%',
        filter: 'blur(40px)',
      },
    },
  },
  blogText: {
    fontFamily: FONTS.title,
    fontSize: 16,
    padding: '50px 40px 28px',
    textAlign: 'center',
    color: '#000000',
    transitionDelay: '0.3s',
    [theme.breakpoints.up('md')]: {
      padding: '80px 200px 40px',
      fontSize: 20,
    },
    [theme.breakpoints.up('lg')]: {
      padding: '150px 200px 40px',
      fontSize: 32,
    },
  },
  blogButton: {
    textAlign: 'center',
    '& a': {
      transitionDelay: '0.6s',
      padding: '15px 68px',
      fontSize: 16,
      height: 'unset',
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.4) 123.86%), #000000;',
      color: '#ffffff',
      [theme.breakpoints.up('lg')]: {
        borderRadius: 27,
        fontSize: 20,
        padding: '27px 94px',
      },
    },
  },
  posts: {
    maxWidth: 1440,
    margin: '80px auto 100px',
    maxHeight: 'unset',
    width: '100%',
    padding: '0 30px',
    [theme.breakpoints.up('md')]: {
      columnCount: 2,
      columnGap: 40,
      maxHeight: 1305,
      marginBottom: 0,
      padding: '0 40px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 60px',
      maxHeight: 1450,
    },
  },
  post: {
    marginBottom: 20,
    minHeight: 0,
    color: '#000000',
    background: '#FFFFFF',
    borderRadius: '20px',
    width: '100%',
    height: 'min-content',
    '& img': {
      width: '100%',
      objectFit: 'contain',
      borderRadius: '20px',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: 40,
      borderRadius: '30px',
      '& img': {
        borderRadius: '30px',
      },
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 40,
      borderRadius: '80px',
      '& img': {
        borderRadius: '80px',
      },
      '&:nth-child(2n)': {
        transitionDelay: 0.5,
      },
    },
  },
  btn: {
    marginTop: 16,
    padding: '12px 24px',
    fontSize: 18,
    width: 'max-content',
    '& svg': {
      marginLeft: 9,
    },
  },
  blue: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #44D8BF;',
  },
  green: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #9FEA38;',
  },
  purple: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #C88AF6',
  },
  yellow: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #F3BA2F',
  },
  red: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) -48.61%, rgba(255, 255, 255, 0) 86.17%, rgba(255, 255, 255, 0.5) 219.44%), #FF8DB5',
  },
}));
