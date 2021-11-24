import React, { useCallback } from 'react';
import { useIsLGUp, useIsMDDown, useIsXLUp } from '../../../../../theme';
import { useTilesStyles } from './useTilesStyles';
import { Box, Button } from '@material-ui/core';
import { WithAnimation } from '../../../../../WithAnimation';
import classNames from 'classnames';

export const Tiles = () => {
  const classes = useTilesStyles();

  const isXLUp = useIsXLUp();
  const isLgUp = useIsLGUp();
  const isMdDown = useIsMDDown();

  const scrollToHandle = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.getBoundingClientRect().top + window.scrollY,
      });
    }
  }, []);

  return (
    <Box
      className={classes.root}
      display={isMdDown ? 'grid' : 'flex'}
      gridGap={isMdDown ? '8px' : '30px'}
    >
      <WithAnimation className={classes.tileItem} rootMargin="0%">
        <div className={classNames(classes.tileItemContent)}>
          <div className={classes.tileTop}>
            BULL & BEAR <br />
            Option
          </div>
          <p>
            Decentralized option product with no liquidation and non-oracle
            based contract.
          </p>
          <div className={classNames(classes.tileCount, classes.gradientGreen)}>
            1
          </div>
          <div className={classes.tileContent}>
            <Box
              display="flex"
              alignItems={isXLUp ? 'center' : isLgUp ? 'flex-start' : 'center'}
              flexDirection={isXLUp ? 'row' : isLgUp ? 'column-reverse' : 'row'}
            >
              <Button
                className={classNames(classes.tileBtn, classes.gradientGreen)}
                variant="contained"
                href="https://app.antimatter.finance/#/option_trading"
                role="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Launch App
              </Button>
              <Button
                onClick={() => scrollToHandle('features')}
                className={classes.tileMore}
                variant="text"
                role="link"
              >
                Learn More
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation className={classes.tileItem} rootMargin="0%">
        <div className={classNames(classes.tileItemContent)}>
          <div className={classes.tileTop}>
            Nonfungible
            <br />
            Finance
          </div>
          <p>
            Connecting Defi and NFTs: Financial ETFs and formation of customized
            indexes through NFTs
          </p>
          <div className={classNames(classes.tileCount, classes.gradientRed)}>
            2
          </div>
          <div className={classes.tileContent}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={isXLUp ? 'row' : isLgUp ? 'column-reverse' : 'row'}
            >
              <Button
                className={classNames(classes.tileBtn, classes.gradientRed)}
                variant="contained"
                href="https://nonfungible.finance/#/spot_index"
                role="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Launch app
              </Button>
              <Button
                onClick={() => scrollToHandle('NFT')}
                className={classes.tileMore}
                variant="text"
                role="link"
              >
                Learn More
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>
      <WithAnimation className={classes.tileItem} rootMargin="0%">
        <div className={classNames(classes.tileItemContent)}>
          <div className={classes.tileTop}>
            Antimatter <br />
            Dao
          </div>
          <p>
            A hub for research and exploration. A collaborative workplace for
            innovative onchain derivative application
          </p>
          <div className={classNames(classes.tileCount, classes.gradientBlue)}>
            3
          </div>
          <div className={classes.tileContent}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={isXLUp ? 'row' : isLgUp ? 'column-reverse' : 'row'}
            >
              <Button
                className={classNames(classes.tileBtn, classes.gradientBlue)}
                variant="contained"
                href="https://dao.antimatter.finance/#/stake"
                role="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Launch App
              </Button>
              <Button
                onClick={() => scrollToHandle('DAO')}
                className={classes.tileMore}
                variant="text"
                role="link"
              >
                Learn More
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>
    </Box>
  );
};
