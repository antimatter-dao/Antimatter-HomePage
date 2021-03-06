import { ServerStyleSheets } from '@material-ui/styles';
import Document, {
  DocumentContext,
  Head,
  Main,
  Html,
  NextScript,
} from 'next/document';
import React from 'react';
import flush from 'styled-jsx/server';
import { t } from '../src/i18n/intl';
import intl from 'react-intl-universal';
import { locales } from '../src/i18n';
import { Locale } from '../src/i18n/types/locale';

type Props = {};

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: DocumentContext): Promise<any> => {
    // Render app and page and get the context of the page with collected side effects.

    intl
      .init({
        currentLocale: 'en-US',
        locales,
        fallbackLocale: Locale.en,
      })
      .catch(err => console.error(err));

    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      ),
    };
  };

  render() {
    // const { currentLocale } = intl.getInitOptions();

    return (
      <Html lang={'en-US'} dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href="/images/antimatter.png"
            type="image/png"
          />
          <meta name="title" content={t('common.site-title')} />
          <meta name="keywords" content={t('common.meta.keywords')} />
          <meta name="description" content={t('common.meta.description')} />
          <meta property="og:title" content={t('common.og.title')} />
          <meta
            property="og:description"
            content={t('common.og.description')}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://antimatter.finance/" />
          <meta property="og:image" content="/images/social-share.jpg" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/logo.png" />
          {/* <title>{t('common.site-title')}</title> */}
        </Head>
        <body style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
