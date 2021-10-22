import React, { useMemo } from 'react';
import { MediumIcon } from '../../../common/components/Icons/MediumIcon';
import { TwitterIcon } from '../../../common/components/Icons/TwitterIcon';
import { TelegramIcon } from '../../../common/components/Icons/TelegramIcon';
import { GithubIcon } from '../../../common/components/Icons/GithubIcon';
import { ForumIcon } from '../../../common/components/Icons/ForumIcon';
import { Box, IconButton } from '@material-ui/core';
import { uid } from 'react-uid';
import { useSocialLinksStyles } from './useSocialLinksStyles';

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
        href: 'https://github.com/antimatter-finance/',
      },
      {
        title: 'Medium',
        icon: MediumIcon,
        href: 'https://medium.com/@antimatterdefi',
      },
      {
        title: 'Twitter',
        icon: TwitterIcon,
        href: 'https://twitter.com/antimatterdefi',
      },
      {
        title: 'Telegram',
        icon: TelegramIcon,
        href: 'https://t.me/antimatterchat',
      },
      {
        title: 'Forum',
        icon: ForumIcon,
        href: 'https://forum.antimatter.finance',
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
