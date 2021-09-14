import React, { useCallback, useMemo, useState } from 'react';
import { Locale } from '../../../../i18n/types/locale';
import { t } from '../../../../i18n/intl';
import { Link as MuiLink, Menu, MenuItem } from '@material-ui/core';
import { uid } from 'react-uid';
import { useLocalSwitcherStyles } from './useLocalSwitcherStyles';
import { GlobeIcon } from '../../../common/components/Icons/GlobeIcon';
import classNames from 'classnames';
import intl from 'react-intl-universal';
import Link from 'next/link';

interface ILocalSwitcherProps {
  linkClass?: any;
}

export const LocaleSwitcher = ({ linkClass }: ILocalSwitcherProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const classes = useLocalSwitcherStyles();

  const handleClick = (event: any) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const localeOptions = useMemo(
    () => [
      {
        value: Locale.en,
        label: t('language.en-US'),
      },
      // {
      //   value: Locale.zh,
      //   label: t('language.zh-CN'),
      // },
    ],
    [],
  );

  const { currentLocale, fallbackLocale } = intl.getInitOptions();

  const renderCurrentLocale = useCallback(() => {
    const curLocale = localeOptions.find(item => item.value === currentLocale);

    if (curLocale) {
      return curLocale.label.substring(0, 3);
    }
  }, [localeOptions, currentLocale]);

  return (
    <>
      <MuiLink
        href="/"
        aria-controls="lang-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classNames(linkClass, classes.btn)}
      >
        <GlobeIcon className={classes.icon} />
        {renderCurrentLocale()}
      </MuiLink>
      <Menu
        id="lang-menu"
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
        {localeOptions.map(item => {
          return (
            <MenuItem
              disabled={item.value === currentLocale}
              className={classes.menuItem}
              key={uid(item)}
            >
              <Link
                href={`/${
                  item.value !== fallbackLocale ? `${item.value}.html` : ''
                }`}
              >
                <a className={classes.menuItemLink}>{item.label}</a>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
