import {
  Box,
  ClickAwayListener,
  Container,
  Divider,
  Drawer,
  Link,
} from '@material-ui/core';
import { t } from '../../../../i18n/intl';
import { Logo } from '../Logo';
import { Toggle } from '../Toggle';
import { useHeaderStyles } from './useHeaderStyles';
import { useHeader } from './useHeader';
import { SocialLinks } from '../SocialLinks';
import classNames from 'classnames';
import { LocaleSwitcher } from '../LocaleSwitcher';
import { ProductsMenu } from './components/ProductsMenu';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';

export const Header = () => {
  const { mobileNavShowed, toggleNav } = useHeader();

  const classes = useHeaderStyles();

  const links = useMemo(
    () => [
      {
        label: t('header.docs'),
        href: 'https://docs.bounce.finance/',
      },
      // {
      //   label: t('header.governance'),
      //   href: 'https://www.bounce.community/', // TODO: need URL
      // },
      {
        label: t('header.forum'),
        href: 'https://www.bounce.community/',
      },
    ],
    [],
  );

  const renderedDesktop = (
    <div className={classes.renderDesktop}>
      <LocaleSwitcher linkClass={classes.link} />

      <nav className={classes.links}>
        <ProductsMenu linkClass={classes.link} />
        {links.slice(0, links.length - 1).map(link => (
          <Link
            className={classes.link}
            href={link.href}
            role="link"
            rel="noopener noreferrer"
            target="_blank"
            key={uid(link)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {links.slice(-1, 1).map(link => (
        <Link
          className={classes.link}
          href={link.href}
          role="link"
          rel="noopener noreferrer"
          target="_blank"
          key={uid(link)}
        >
          {link.label}
        </Link>
      ))}
      <Link
        className={classNames(classes.desktopForumLink, classes.link)}
        href="https://www.bounce.community/"
        role="link"
        rel="noopener noreferrer"
        target="_blank"
      >
        {t('header.forum')}
      </Link>
      <SocialLinks className={classes.socials} />
    </div>
  );

  const renderedMobile = (
    <div className={classes.renderMobile}>
      <nav className={classes.links} />
      <div className={classes.buttons}>
        <ClickAwayListener onClickAway={toggleNav(false)}>
          <div>
            <Toggle
              onClick={mobileNavShowed ? toggleNav(false) : toggleNav(true)}
              isActive={mobileNavShowed}
            />

            <Drawer
              className={classes.drawer}
              classes={{
                paperAnchorRight: classes.drawerPaper,
              }}
              elevation={0}
              anchor="right"
              open={mobileNavShowed}
              onClose={toggleNav(false)}
            >
              <Container className={classes.navInner}>
                <Box className={classes.drawerTop}>
                  <Logo />
                  <Toggle
                    onClick={
                      mobileNavShowed ? toggleNav(false) : toggleNav(true)
                    }
                    isActive={mobileNavShowed}
                  />
                </Box>
                <Box mb={1} className={classes.mobileMenuLinks}>
                  <ProductsMenu linkClass={classes.link} />
                  <Divider className={classes.mobileMenuDivider} />
                  {links.map(link => (
                    <Link
                      className={classes.link}
                      href={link.href}
                      role="link"
                      rel="noopener noreferrer"
                      target="_blank"
                      key={uid(link)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>

                <Box mt="auto" className={classes.drawerBottom}>
                  <LocaleSwitcher linkClass={classes.link} />
                  <SocialLinks className={classes.socials} />
                </Box>
              </Container>
            </Drawer>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );

  return (
    <header className={classes.root}>
      <Container className={classes.container} maxWidth={false}>
        <Logo />
        {renderedMobile}
        {renderedDesktop}
      </Container>
    </header>
  );
};
