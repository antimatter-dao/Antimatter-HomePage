import React, { useMemo, useState } from 'react';
import { t } from '../../../../../../i18n/intl';
import { Link, Menu, MenuItem } from '@material-ui/core';
import { uid } from 'react-uid';
import { useProductsMenuStyles } from './useProductsMenuStyles';
import { AngleDownIcon } from '../../../../../common/components/Icons/AngleDownIcon';
import classNames from 'classnames';
import { useIsLGDown } from '../../../../../theme';

interface IProductsMenuProps {
  linkClass?: any;
}

export const ProductsMenu = ({ linkClass }: IProductsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const classes = useProductsMenuStyles();

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
        label: t('header.products-menu.bounce-decentralized'),
        href: 'https://app.bounce.finance/',
      },
      {
        label: t('header.products-menu.fangible'),
        href: 'https://fangible.com/',
      },
      {
        label: t('header.products-menu.bounce-polkadot'),
        href: 'https://ksm.bounce.finance/',
      },
      // {
      //   label: t('header.products-menu.opensource'),
      //   href: '#', // TODO: need URL
      // },
      {
        label: t('header.products-menu.certified'),
        href: 'https://certified.bounce.finance/',
      },
    ],
    [],
  );

  const renderedDesktop = (
    <>
      <Link
        href="/"
        aria-controls="products-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classNames(linkClass, classes.link)}
      >
        {t('header.products-menu.title')}
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
