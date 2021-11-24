import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../../../theme/mainTheme';
import { PARALLAX_MARGIN } from '../../../theme/const';

export const useDualInvestStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    color: PALETTE.text.light,
    margin: `${-PARALLAX_MARGIN}px 0 0`,
    borderRadius: '30px',
    pointerEvents: 'auto',
    background: '#232323',
    minHeight: 120,
    maxWidth: '100vw',
    // overflowX: 'hidden',
    padding: '36px 36px 82px',
    transform: 'translateY(-120px)',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1440,
      padding: '80px 88px 132px',
      margin: `${-PARALLAX_MARGIN}px auto 0`,
      borderRadius: '120px',
      width: '100%',
    },
  },
  outlinedCard: {
    border: '1px solid transparent',
    borderRadius: '72px',
    fontSize: 16,
    fontWeight: 500,
    '& p': {
      margin: '12px 0 0',
    },
    '& ol': {
      padding: 0,
      margin: '0 0 0 20px',
    },
    '& li': {
      fontSize: 14,
      marginTop: 12,
      color: '#ffffff50',
      '&::before': {
        content: "''",
        marginRight: 10,
      },
    },
    '& h6': {
      margin: 0,
      fontSize: 14,
      color: '#ffffff50',
    },
    [theme.breakpoints.up('md')]: {
      padding: 40,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      fontSize: 24,
      color: '#ffffff80',
      '& li': { fontSize: 15 },
      '& h6': {
        fontSize: 15,
      },
    },
  },
  title: {
    fontFamily: FONTS.title,
    fontWeight: 400,
    fontSize: 24,
    maxWidth: 720,
    [theme.breakpoints.up('md')]: {
      fontSize: 44,
    },
  },
  watchButton: {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.5) 123.86%), #9FEA38;',
    borderRadius: 80,
    padding: '15px 25px',
    width: '211px',
    whiteSpace: 'nowrap',
    height: 'fit-content',
    fontSize: 16,
    [theme.breakpoints.up('lg')]: {
      width: '320px',
      padding: '27px 59px',
      fontSize: 20,
    },
  },
  capsule: {
    padding: '6px 19px',
    fontSize: 12,
    borderRadius: 36,
    color: '#232323',
    width: 'max-content',
    hight: 'max-content',
    marginTop: 43,
    '&.green': {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.4) 123.86%), #9FEA38;',
    },
    '&.blue': {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.4) 123.86%), #44D8BF;',
    },
    '&.red': {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 56.58%, rgba(255, 255, 255, 0.4) 123.86%), #FF82AE;',
    },
  },
}));
