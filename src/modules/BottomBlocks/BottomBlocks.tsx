import React from 'react';
import { useBottomBlocksStyles } from './useBottomBlocksStyles';
import { Grid } from '@material-ui/core';
import { BottomBlock } from './components/BottomBlock';
import { t } from '../../i18n/intl';
import { BouncePolkaIcon } from '../common/components/Icons/BouncePolkaIcon';
import { ToolboxIcon } from '../common/components/Icons/ToolboxIcon';

export const BottomBlocks = () => {
  const classes = useBottomBlocksStyles();

  const renderedLeftSide = (
    <BottomBlock
      id="bounce-polkadot"
      BrandLogo={BouncePolkaIcon}
      brandName={t('bounce-polkadot.brand')}
      title={t('bounce-polkadot.title')}
      text={t('bounce-polkadot.text')}
      href="https://ksm.bounce.finance/"
    />
  );

  const renderedRightSide = (
    <BottomBlock
      id="bounce-toolbox"
      BrandLogo={ToolboxIcon}
      brandName={t('bounce-toolbox.brand')}
      title={t('bounce-toolbox.title')}
      text={t('bounce-toolbox.text')}
      isSecond
    />
  );

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.container}>
          {renderedLeftSide}
        </Grid>
        <Grid item xs={12} lg={6}>
          {renderedRightSide}
        </Grid>
      </Grid>
    </div>
  );
};
