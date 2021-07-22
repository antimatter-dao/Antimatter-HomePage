import React from 'react';
import { useChainsBlockStyles } from './useChainsBlockStyles';
import { Container } from '@material-ui/core';
import { Tiles } from './components/Tiles';
import { Chains } from './components/Chains';
// import { Participation } from './components/Participation';
// import { WithScrollFreezing } from '../WithScrollFreezing';

export const ChainsBlock = () => {
  const classes = useChainsBlockStyles();

  return (
    // <WithScrollFreezing isChainBlock={true}>
    <div className={classes.root} id="chains-block">
      <Container maxWidth={false} className={classes.container}>
        <Tiles />
        <Chains />
        {/* <Participation /> */}
      </Container>
    </div>
    // </WithScrollFreezing>
  );
};
