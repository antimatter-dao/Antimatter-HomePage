import { fade, makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../../../theme/mainTheme';

export const useChainItemStyles = makeStyles<Theme>(theme => ({
  root: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    cursor: 'pointer',
    pointerEvents: 'auto',
    // position: 'relative',
    color: PALETTE.text.light,
    transition: '0.2s',
    background:
      'linear-gradient(169.06deg, #FFFFFF 8.1%, #CCF495 86.75%, #9FEA38 176.95%), linear-gradient(135.43deg, #000000 -7.49%, #000000 60.86%, #02FF49 180.85%);',
    overflow: 'hidden',
    [theme.breakpoints.up('xl')]: {
      width: 142,
      height: 142,
    },
    // '&:hover': {
    //   borderColor: 'transparent',
    //   background:
    //     'linear-gradient(169.06deg, #FFFFFF 8.1%, #CCF495 86.75%, #9FEA38 176.95%), linear-gradient(270deg, #000000 -7.49%, #000000 60.86%, #02FF49 180.85%);',
    //   overflow: 'hidden',
    // },
  },
  // icon: {
  //   fontSize: 22,
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   lineHeight: 0,
  //   transform: 'translate(-50%, -50%)',
  //   [theme.breakpoints.up('sm')]: {
  //     fontSize: 26,
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: 37,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     fontSize: 42,
  //   },
  //   [theme.breakpoints.up('xl')]: {
  //     fontSize: 37,
  //   },
  //   '& > svg': {
  //     fontSize: 'inherit',
  //   },
  // },
  // label: {
  //   fontSize: 11,
  //   position: 'absolute',
  //   top: 'calc(50% + 15px)',
  //   left: '20%',
  //   right: '20%',
  //   textAlign: 'center',
  //   opacity: 0,
  //   transform: 'translateY(1em)',
  //   transition: 'opacity 0.2s, transform 0.3s',
  //   [theme.breakpoints.up('sm')]: {
  //     top: 'calc(50% + 17px)',
  //     fontSize: 14,
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: 18,
  //     top: 'calc(50% + 30px)',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     fontSize: 20,
  //     top: 'calc(50% + 40px)',
  //   },
  //   [theme.breakpoints.up('xl')]: {
  //     fontSize: 18,
  //     top: 'calc(50% + 30px)',
  //   },
  //   ':hover > &': {
  //     opacity: 1,
  //     transform: 'translateY(0)',
  //   },
  // },
}));
