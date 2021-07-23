import classNames from 'classnames';
import React from 'react';
import { WithAnimation } from '../../../WithAnimation';
import { useSideScreenStyles } from './useSideScreenStyles';

interface ISideScreenProps {
  screenPath: string;
  classname?: string;
}

export const SideScreen = ({ screenPath, classname }: ISideScreenProps) => {
  const classes = useSideScreenStyles();

  return (
    <div className={classes.root}>
      <WithAnimation
        className={classes.screenWrap}
        defaultAnimation={false}
        addClassInView={classes.screenInView}
      >
        <img
          className={classNames(classes.screen, classname)}
          src={screenPath}
          alt=""
        />
      </WithAnimation>
    </div>
  );
};
