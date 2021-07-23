import React, { useMemo, useState } from 'react';
import { Link, Menu, MenuItem } from '@material-ui/core';
import { uid } from 'react-uid';
import { useContactsMenuStyles } from './useContactsMenuStyles';
import { AngleDownIcon } from '../../../../../common/components/Icons/AngleDownIcon';
import classNames from 'classnames';
import { useIsLGDown } from '../../../../../theme';
import { MediumIcon } from '../../../../../common/components/Icons/MediumIcon';
import { TwitterIcon } from '../../../../../common/components/Icons/TwitterIcon';
import { TelegramIcon } from '../../../../../common/components/Icons/TelegramIcon';
import { GithubIcon } from '../../../../../common/components/Icons/GithubIcon';

interface ContactsMenuProps {
  linkClass?: any;
}

export const ContactsMenu = ({ linkClass }: ContactsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const classes = useContactsMenuStyles();

  const isLGDown = useIsLGDown();

  const handleClick = (event: any) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = useMemo(
    () => [
      {
        label: (
          <>
            <MediumIcon />
            Medium
          </>
        ),
        href: 'https://app.bounce.finance/',
      },
      {
        label: (
          <>
            <TwitterIcon />
            Twitter
          </>
        ),
        href: 'https://fangible.com/',
      },
      {
        label: (
          <>
            <TelegramIcon />
            Telegram
          </>
        ),
        href: 'https://ksm.bounce.finance/',
      },
      {
        label: (
          <>
            <GithubIcon />
            Github
          </>
        ),
        href: 'https://certified.bounce.finance/',
      },
    ],
    [],
  );

  const renderedDesktop = (
    <>
      <Link
        href="/"
        underline="none"
        aria-controls="contacts-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classNames(linkClass, classes.link)}
      >
        Contacts
        <AngleDownIcon className={classes.icon} />
      </Link>
      <Menu
        id="products-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {menuItems.map(item => {
          return (
            <MenuItem
              key={uid(item)}
              component={Link}
              href={item.href}
              className={classes.menuItem}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

  const renderedMobile = (
    <>
      {menuItems.map(link => (
        <Link
          className={classNames(linkClass, classes.link)}
          href={link.href}
          role="link"
          rel="noopener noreferrer"
          target="_blank"
          key={uid(link)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return <>{isLGDown ? renderedMobile : renderedDesktop}</>;
};