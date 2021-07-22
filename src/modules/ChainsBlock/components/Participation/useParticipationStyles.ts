import { fade, makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useParticipationStyles = makeStyles<Theme>(theme => ({
  root: {},
  top: {
    [theme.breakpoints.up('xl')]: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
      alignItems: 'flex-end',
    },
  },
  title: {
    fontFamily: FONTS.medium,
    fontWeight: 500,
    fontSize: 48,
    marginBottom: theme.spacing(3.5),
    maxWidth: 340,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      fontSize: 84,
      maxWidth: 680,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 116,
      maxWidth: 910,
      marginBottom: 0,
    },
  },
  titleOne: {
    display: 'block',
  },
  titleTwo: {
    display: 'block',
    textAlign: 'right',
  },
  textWrap: {
    marginBottom: theme.spacing(2),
  },
  text: {
    display: 'inline-block',
    fontSize: 16,
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      width: 300,
    },
  },
  listWrap: {
    [theme.breakpoints.up('xl')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      margin: theme.spacing(14, 0),
    },
  },
  list: {
    [theme.breakpoints.up('xl')]: {
      width: 910,
      maxWidth: '74%',
    },
  },
  listItem: {
    position: 'relative',
    padding: theme.spacing(3.5, 5, 3.5, 0),
    fontSize: 16,
    borderTop: `1px solid ${fade(theme.palette.common.white, 0.5)}`,
    '&:first-child': {
      borderTop: 'none',
    },
    '&:nth-child(2)': {
      transitionDelay: '0.3s',
    },
    '&:nth-child(3)': {
      transitionDelay: '0.6s',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 24,
    },
  },
  listItemNum: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    fontSize: 14,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
    },
  },
  hint: {
    fontSize: 14,
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(14),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
  },
}));
