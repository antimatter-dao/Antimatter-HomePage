import React, { useCallback } from 'react';
import { useIsXLUp } from '../../../theme';
import { useTilesStyles } from './useTilesStyles';
import { Box, Button, Grid } from '@material-ui/core';
import { WithAnimation } from '../../../WithAnimation';
import classNames from 'classnames';
import { t } from '../../../../i18n/intl';

export const Tiles = () => {
  const classes = useTilesStyles();

  const isXLUp = useIsXLUp();

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
    <Grid container spacing={isXLUp ? 6 : 2} className={classes.root}>
      <WithAnimation
        Component={Grid}
        item
        xs={12}
        lg={6}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div className={classNames(classes.tileItemContent)}>
          <div className={classes.tileTop}>Perpetual Options</div>
          <div className={classNames(classes.tileCount, classes.gradientGreen)}>
            1
          </div>
          <div className={classes.tileContent}>
            <Box display="flex" alignItems="center">
              <Button
                className={classNames(classes.tileBtn, classes.gradientGreen)}
                variant="contained"
                href="https://app.bounce.finance/"
                role="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('common.launch-app')}
              </Button>
              <Button
                onClick={() => scrollToHandle('bounce-auction')}
                className={classes.tileMore}
                variant="text"
                role="link"
              >
                {t('common.learn-more')}
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation
        Component={Grid}
        item
        xs={12}
        lg={6}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div className={classNames(classes.tileItemContent)}>
          <div className={classes.tileTop}>Nonfungible Finance</div>
          <div className={classNames(classes.tileCount, classes.gradientRed)}>
            2
          </div>
          <div className={classes.tileContent}>
            <Box display="flex" alignItems="center">
              <Button
                className={classNames(classes.tileBtn, classes.gradientRed)}
                variant="contained"
                href="https://fangible.com/"
                role="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('common.launch-app')}
              </Button>
              <Button
                onClick={() => scrollToHandle('fangible')}
                className={classes.tileMore}
                variant="text"
                role="link"
              >
                {t('common.learn-more')}
              </Button>
            </Box>
          </div>
        </div>
      </WithAnimation>
    </Grid>
  );
};
