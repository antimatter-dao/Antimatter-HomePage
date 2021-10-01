import React, { ReactNode, useEffect, useState } from 'react';
import { useLayoutStyles } from './useLayoutStyles';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Locale } from '../../../../i18n/types/locale';
import intl from 'react-intl-universal';
import { locales } from '../../../../i18n';
import { isServer } from '../../../../utils/isServer';
import classNames from 'classnames';
import { t } from '../../../../i18n/intl';

interface ILayoutProps {
  locale: string;
  children: ReactNode;
}

export const Layout = ({ locale, children }: ILayoutProps) => {
  const classes = useLayoutStyles();

  const [initDone, setInitDone] = useState(false);

  const isServerSide = isServer();

  // if (isServerSide) {
  //   intl
  //     .init({
  //       currentLocale: locale,
  //       locales,
  //       fallbackLocale: Locale.en,
  //     })
  //     .catch(err => console.error(err));
  // }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentNode?.removeChild(jssStyles);
    }

    setInitDone(false);
    intl
      .init({
        currentLocale: locale,
        locales,
        fallbackLocale: Locale.en,
      })
      .then(() => {
        setInitDone(true);

        const element = document.getElementById('layout');
        element?.classList.remove('server-side');

        const event = new CustomEvent('ready');
        window.dispatchEvent(event);
      });
  }, [locale]);

  return (
    <>
      {(isServerSide || initDone) && (
        <div
          id="layout"
          className={classNames(
            classes.root,
            isServerSide && 'server-side',
            initDone && 'client-side',
          )}
        >
          <noscript className={classes.noJs}>
            <noindex>{t('common.no-js')}</noindex>
          </noscript>
          <main className={classes.main}>
            <Header />
            <div className={classes.content}>{children}</div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};
