import React, { useCallback } from 'react';
import { useIsLGUp, useIsXLUp } from '../../../theme';
import { useTilesStyles } from './useTilesStyles';
import { Box, Button, Grid } from '@material-ui/core';
import { WithAnimation } from '../../../WithAnimation';
import classNames from 'classnames';

export const Tiles = () => {
  const classes = useTilesStyles();

  const isXLUp = useIsXLUp();
  const isLgUp = useIsLGUp();

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
    <Grid container spacing={isXLUp ? 4 : 1} className={classes.root}>
      <WithAnimation
        Component={Grid}
        item
        xs={12}
        lg={4}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div className={classNames(classes.tileItemContent, 'gradientGreen')}>
          <div className={classes.tileTop}>Perpetual Options</div>
          <div className={classNames(classes.tileCount, classes.gradientGreen)}>
            1
          </div>
          <div className={classes.tileContent}>
            <Box
              display="flex"
              alignItems="center"
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
                <svg width="34" height="8">
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM1 4.5H33V3.5H1V4.5Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation
        Component={Grid}
        item
        xs={12}
        lg={4}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div className={classNames(classes.tileItemContent, 'gradientRed')}>
          <div className={classes.tileTop}>Nonfungible Finance</div>
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
                <svg width="34" height="8">
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM1 4.5H33V3.5H1V4.5Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>
      <WithAnimation
        Component={Grid}
        item
        xs={12}
        lg={4}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div className={classNames(classes.tileItemContent, 'gradientPurple')}>
          <div className={classes.tileTop}>Antimatter {'\n'}Dao</div>
          <div
            className={classNames(classes.tileCount, classes.gradientPurple)}
          >
            3
          </div>
          <div className={classes.tileContent}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={isXLUp ? 'row' : isLgUp ? 'column-reverse' : 'row'}
            >
              <Button
                className={classNames(classes.tileBtn, classes.gradientPurple)}
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
                <svg width="34" height="8">
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM1 4.5H33V3.5H1V4.5Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>
    </Grid>
  );
};
