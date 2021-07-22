import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import '../src/assets/fonts/style.css';
import { mainTheme } from '../src/modules/theme/mainTheme';
import React from 'react';

interface IAppProps {
  Component: any;
  pageProps: any;
}

function App({ Component, pageProps }: IAppProps) {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default App;
