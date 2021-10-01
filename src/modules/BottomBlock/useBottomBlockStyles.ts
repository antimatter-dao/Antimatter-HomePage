import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useBottomBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    color: PALETTE.text.light,
    margin: `${-PARALLAX_MARGIN}px 0 0`,
    borderRadius: '30px 30px 0 0',
    pointerEvents: 'auto',
    maxWidth: 1440,
    backgroundColor: theme.palette.background.default,
    zIndex: 2,
    [theme.breakpoints.up('lg')]: {
      margin: '-60px auto 0',
      borderRadius: '120px 120px 0 0',
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
    overflow: 'hidden',
    '&::before': {
      content: `''`,
      top: '10%',
      left: '50%',
      transform: 'translateX(-50%)',
      position: 'absolute',
      width: '50%',
      height: '50%',
      background: '#F3BA2F',
      filter: 'blur(120px)',
      opacity: 0.5,
      borderRadius: 120,
      transformOrigin: 'center center',
      animation: '$breathe 5s infinite alternate ease-in-out',
    },
    [theme.breakpoints.up('lg')]: {
      height: 550,
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
}));
