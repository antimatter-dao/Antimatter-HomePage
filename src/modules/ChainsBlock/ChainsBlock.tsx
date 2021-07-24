import React from 'react';
import { useChainsBlockStyles } from './useChainsBlockStyles';
import { Tiles } from './components/Tiles';
import { Chains } from './components/Chains';

export const ChainsBlock = () => {
  const classes = useChainsBlockStyles();

  return (
    <div className={classes.root} id="chains-block">
      <Tiles />
      <Chains />
      <div className={classes.bg}></div>
    </div>
  );
};
