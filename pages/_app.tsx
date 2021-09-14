import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import '../src/assets/fonts/style.css';
import Head from 'next/head';
import { mainTheme } from '../src/modules/theme/mainTheme';
import React from 'react';
import { t } from '../src/i18n/intl';

interface IAppProps {
  Component: any;
  pageProps: any;
}

function App({ Component, pageProps }: IAppProps) {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{t('common.site-title')}</title>
      </Head>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default App;
