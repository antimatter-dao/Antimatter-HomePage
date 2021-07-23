import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography } from '@material-ui/core';
import { WithAnimation } from '../WithAnimation';
import classNames from 'classnames';
import { ChainsBlock } from '../ChainsBlock';
import { WithScrollFreezing } from '../WithScrollFreezing';

export const TopBlock = () => {
  const classes = useTopBlockStyles();

  return (
    <WithScrollFreezing isChainBlock={true}>
      <div className={classes.root}>
        <video
          muted
          autoPlay
          playsInline
          loop
          className={classNames(classes.video)}
        >
          <source src="/video/Black_Ball_Loop.mp4" type="video/mp4" />
        </video>
        <video
          muted
          autoPlay
          playsInline
          onEnded={e => {
            e.target.style.display = 'none';
          }}
          className={classNames(classes.video)}
        >
          <source src="/video/Black_Ball_Intro.mp4" type="video/mp4" />
        </video>
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            The gateway for <span>DeFi</span> derivatives & financial{' '}
            <span>NFT’</span>s
          </WithAnimation>
          <WithAnimation className={classes.text} Component={Typography}>
            Antimatter powers an ecosystem of on-chain financial products.
            Create and trade tokenized perpetual options in a permissionless
            environment across major blockchains.
          </WithAnimation>
        </Container>
      </div>
      <ChainsBlock />
      <div className={classes.filler} />
    </WithScrollFreezing>
  );
};
