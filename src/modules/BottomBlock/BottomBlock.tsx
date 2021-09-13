import React from 'react';
import { useBottomBlockStyles } from './useBottomBlockStyles';
import { StrategicPartner } from './StrategicPartner';
import { WithAnimation } from '../WithAnimation';
import { Button } from '@material-ui/core';

export const BottomBlock = () => {
  const classes = useBottomBlockStyles();

  return (
    <div className={classes.root} id="bottom-block">
      <StrategicPartner />
      <div className={classes.blog}>
        <WithAnimation className={classes.blogText}>
          Want to be aware of all the news and updates? Read our blog
        </WithAnimation>
        <WithAnimation className={classes.blogButton}>
          <Button>Go to Medium</Button>
        </WithAnimation>
      </div>
    </div>
  );
};
