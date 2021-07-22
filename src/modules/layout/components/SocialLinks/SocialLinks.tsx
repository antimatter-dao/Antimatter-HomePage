import React, { useMemo } from 'react';
import { MediumIcon } from '../../../common/components/Icons/MediumIcon';
import { TwitterIcon } from '../../../common/components/Icons/TwitterIcon';
import { TelegramIcon } from '../../../common/components/Icons/TelegramIcon';
import { Box, IconButton } from '@material-ui/core';
import { uid } from 'react-uid';
import { useSocialLinksStyles } from './useSocialLinksStyles';
import { GithubIcon } from '../../../common/components/Icons/GithubIcon';

interface ISocialLinks {
  className?: any;
}

export const SocialLinks = ({ className }: ISocialLinks) => {
  const classes = useSocialLinksStyles();

  const links = useMemo(
    () => [
      {
        title: 'Github',
        icon: GithubIcon,
        href: 'https://medium.com/@bouncefinance',
      },
      {
        title: 'Medium',
        icon: MediumIcon,
        href: 'https://medium.com/@bouncefinance',
      },
      {
        title: 'Twitter',
        icon: TwitterIcon,
        href: 'https://twitter.com/bounce_finance?s=21',
      },
      {
        title: 'Telegram',
        icon: TelegramIcon,
        href: 'https://t.me/bounce_finance',
      },
    ],
    [],
  );

  return (
    <Box component="nav" className={className}>
      <ul className={classes.list}>
        {links.map(({ title, href, icon: Icon }) => {
          return (
            <li className={classes.listItem} key={uid(title)}>
              <IconButton
                component="a"
                href={href}
                role="link"
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
              >
                <Icon className={classes.icon} />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
