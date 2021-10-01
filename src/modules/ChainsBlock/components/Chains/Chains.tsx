import React, { useMemo } from 'react';
import { useChainsStyles } from './useChainsStyles';
import { WithAnimation } from '../../../WithAnimation';
import { Typography } from '@material-ui/core';
import { useIsLGUp, useIsMDDown } from '../../../theme';
import { EthereumIcon } from '../../../common/components/Icons/EthereumIcon';
import { BSCIcon } from '../../../common/components/Icons/BSCIcon';
import { HuobiIcon } from '../../../common/components/Icons/Huobi';
import { PolygonIcon } from '../../../common/components/Icons/PolygonIcon';
import { SolanaIcon } from '../../../common/components/Icons/SolanaIcon';
import { ChainItem } from '../ChainItem';
import { uid } from 'react-uid';
import { Icon } from '../../../common/components/Icons/Icon';

export const Chains = () => {
  const classes = useChainsStyles();

  const isLGUp = useIsLGUp();
  const isMDDown = useIsMDDown();

  const items = useMemo(
    () => [
      {
        label: 'Ethereum',
        icon: <EthereumIcon />,
      },
      {
        label: 'Binance Smart Chain',
        icon: <BSCIcon />,
      },
      {
        label: 'Huobi',
        icon: <HuobiIcon />,
      },
      {
        label: 'Icon',
        icon: <Icon />,
      },
      {
        label: 'Polygon',
        icon: <PolygonIcon />,
      },
      {
        label: 'Solana',
        icon: <SolanaIcon />,
      },
    ],
    [],
  );

  return (
    <>
      <WithAnimation
        className={classes.title}
        Component={Typography}
        variant="h2"
      >
        Multi-chain {isMDDown && <br />}ecosystem
        <WithAnimation className={classes.text} Component={Typography}>
          Antimatter products are available across multiple blockchains:
          Ethereum, Binance Smart Chain, Arbitrum, Avalanche, Fantom, Near, Terra
          Blockchain and Solana etc.
        </WithAnimation>
      </WithAnimation>

      <div className={classes.root} id="chain-wrap">
        {isLGUp ? (
          <WithAnimation
            className={classes.itemsDesktop}
            rootMargin="10%"
            defaultAnimation={false}
            addClassInView={classes.itemsDesktopInView}
          >
            {items.map(item => (
              <div className={classes.item} key={uid(item)}>
                <ChainItem label={item.label} icon={item.icon} />
              </div>
            ))}
          </WithAnimation>
        ) : (
          <WithAnimation
            className={classes.itemsMobile}
            rootMargin="0%"
            defaultAnimation={false}
            addClassInView={classes.itemsMobileInView}
          >
            {items.map(item => (
              <div className={classes.item} key={uid(item)}>
                <ChainItem label={item.label} icon={item.icon} />
              </div>
            ))}
          </WithAnimation>
        )}
      </div>
    </>
  );
};
