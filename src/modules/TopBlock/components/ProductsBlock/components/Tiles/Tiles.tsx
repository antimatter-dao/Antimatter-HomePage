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
          <div className={classes.tileTop}>BULL & BEAR {'\n'}Option</div>
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
                <svg
                  width="26"
                  height="8"
                  viewBox="0 0 26 8"
                  fill="none"
                  style={{ marginLeft: 10 }}
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM1 4.5H25V3.5H1V4.5Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation className={classes.tileItem} rootMargin="0%">
        <div className={classNames(classes.tileItemContent)}>
          <div className={classes.tileTop}>Nonfungible {'\n'}Finance</div>
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
              alignItems={isXLUp ? 'center' : isLgUp ? 'flex-start' : 'center'}
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
                <svg
                  width="26"
                  height="8"
                  viewBox="0 0 26 8"
                  fill="none"
                  style={{ marginLeft: 10 }}
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM1 4.5H25V3.5H1V4.5Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>
      <WithAnimation className={classes.tileItem} rootMargin="0%">
        <div className={classNames(classes.tileItemContent)}>
          <div className={classes.tileTop}>Antimatter {'\n'}Dao</div>
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
              alignItems={isXLUp ? 'center' : isLgUp ? 'flex-start' : 'center'}
              flexDirection={isXLUp ? 'row' : isLgUp ? 'column-reverse' : 'row'}
            >
              <Button
                className={classNames(classes.tileBtn, classes.gradientBlue)}
                variant="contained"
                href="https://dao.antimatter.finance/#/"
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
                <svg
                  width="26"
                  height="8"
                  viewBox="0 0 26 8"
                  fill="none"
                  style={{ marginLeft: 10 }}
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM1 4.5H25V3.5H1V4.5Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>
    </Box>
  );
};
