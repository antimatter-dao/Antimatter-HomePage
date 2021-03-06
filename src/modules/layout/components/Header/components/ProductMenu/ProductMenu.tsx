import React, { useMemo, useState } from 'react';
import { Link, Menu, MenuItem } from '@material-ui/core';
import { uid } from 'react-uid';
import { useProductMenuStyles } from './useProductMenuStyles';
import { AngleDownIcon } from '../../../../../common/components/Icons/AngleDownIcon';
import classNames from 'classnames';
import { useIsLGDown } from '../../../../../theme';

interface ProductMenuProps {
  linkClass?: any;
}

export const ProductMenu = ({ linkClass }: ProductMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const classes = useProductMenuStyles();

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
        label: <>Structured Product</>,
        href: 'https://invest.antimatter.finance'
      },
      {
        label: <>BULL & BEAR</>,
        href: 'https://app.antimatter.finance/#/option_trading',
      },
      {
        label: <>Non-fungible finance</>,
        href: 'https://nonfungible.finance/#/',
      },
      {
        label: <>Antimatter Dao</>,
        href: 'https://dao.antimatter.finance/#/',
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
        Labs
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
