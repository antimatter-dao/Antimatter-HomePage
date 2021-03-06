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
import { ForumIcon } from '../../../../../common/components/Icons/ForumIcon';

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
        href: 'https://medium.com/@antimatterdefi',
      },
      {
        label: (
          <>
            <TwitterIcon />
            Twitter
          </>
        ),
        href: 'https://twitter.com/antimatterdefi',
      },
      {
        label: (
          <>
            <TelegramIcon />
            Telegram
          </>
        ),
        href: 'https://t.me/antimatterchat',
      },
      {
        label: (
          <>
            <GithubIcon />
            Github
          </>
        ),
        href: 'https://github.com/antimatter-finance/',
      },
      {
        label: (
          <>
            <ForumIcon />
            Forum
          </>
        ),
        href: 'https://forum.antimatter.finance',
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
        className={classNames(linkClass, classes.mainLink)}
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
              target="_blank"
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
          underline="none"
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
