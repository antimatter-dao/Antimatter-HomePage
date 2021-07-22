import { useMediaQuery, useTheme } from '@material-ui/core';

export const useIsMDDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

export const useIsLGDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('lg'));
};

export const useIsLGUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('lg'));
};

export const useIsXLUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('xl'));
};
