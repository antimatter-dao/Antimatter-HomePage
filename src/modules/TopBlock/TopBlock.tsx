import React, { useCallback, useRef } from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { WithAnimation } from '../WithAnimation';
import classNames from 'classnames';
// import { ChainsBlock } from '../ChainsBlock';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { DualInvest } from './components/DualInvest';
import { ProductsBlock } from './components/ProductsBlock';

const chainList = [
  'etherum.png',
  'arbitrum.png',
  'avalanche.png',
  'fantom.png',
  'binanceSmartChain.png',
];

export const TopBlock = () => {
  const classes = useTopBlockStyles();
  const loop = useRef(null);

  const onEnded = useCallback(e => {
    (e.target as HTMLVideoElement).style.display = 'none';
    const video = loop.current;
    video && (video as HTMLVideoElement).play();
  }, []);

  return (
    <WithScrollFreezing isChainBlock={true}>
      <div className={classes.root}>
        <video
          muted
          playsInline
          loop
          className={classNames(classes.video)}
          ref={loop}
        >
          <source src="/video/Black_Ball_Loop.mp4" type="video/mp4" />
        </video>
        <video
          muted
          autoPlay
          playsInline
          onEnded={onEnded}
          className={classNames(classes.video)}
        >
          <source src="/video/Black_Ball_Intro.mp4" type="video/mp4" />
        </video>
        <div />
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            Enhanced <span>Yield</span> with <span>Structured </span> Products
          </WithAnimation>
          <WithAnimation className={classes.text} Component={Typography}>
            Antimatter offers yield generating structured products
            backed by options
          </WithAnimation>
          <WithAnimation className={classes.text} Component={'div'}>
            <Button className={classes.launchButton}>Coming Soon</Button>
          </WithAnimation>
        </Container>
        <WithAnimation
          Component={'div'}
          className={classNames(
            classes.supportedChains,
            classes.supportedChainBefore,
          )}
          defaultAnimation={false}
          addClassInView={classes.supportedChainAfter}
        >
          <Box alignContent="center" className={classes.supportedChainsGrid}>
            {chainList.map(src => (
              <div key={src}>
                <img src={`/images/supportedChains/${src}`} />
              </div>
            ))}
          </Box>
        </WithAnimation>
      </div>
      <DualInvest />
      <ProductsBlock />
      {/* <ChainsBlock /> */}
      {/* <div className={classes.filler} /> */}
    </WithScrollFreezing>
  );
};
