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
// import { LocaleSwitcher } from '../LocaleSwitcher';
import { ContactsMenu } from './components/ContactsMenu';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { ProductMenu } from './components/ProductMenu';

export const Header = () => {
  const { mobileNavShowed, toggleNav } = useHeader();

  const classes = useHeaderStyles();

  const links = useMemo(
    () => [
      {
        label: t('header.docs'),
        href: 'https://docs.antimatter.finance/',
      },
      {
        label: t('header.governance'),
        href: 'https://governance.antimatter.finance/',
      },
    ],
    [],
  );

  const renderedDesktop = (
    <div className={classes.renderDesktop}>
      {/* <LocaleSwitcher linkClass={classes.link} /> */}

      <nav className={classes.links}>
        <ProductMenu linkClass={classes.link} />
        {links.map(link => (
          <Link
            underline="none"
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
        <ContactsMenu linkClass={classes.link} />
      </nav>
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
                  <ProductMenu linkClass={classes.link} />
                  <Divider className={classes.mobileMenuDivider} />
                  {links.map(link => (
                    <Link
                      underline="none"
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
                  <Divider className={classes.mobileMenuDivider} />
                  <ContactsMenu linkClass={classes.link} />
                </Box>
                {/*
                <Box mt="auto" className={classes.drawerBottom}>
                  <LocaleSwitcher linkClass={classes.link} />
                </Box> */}
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
