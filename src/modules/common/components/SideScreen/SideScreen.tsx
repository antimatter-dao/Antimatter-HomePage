import React from 'react';
import { WithAnimation } from '../../../WithAnimation';
import { useSideScreenStyles } from './useSideScreenStyles';

interface ISideScreenProps {
  screenPath: string;
}

export const SideScreen = ({ top, screenPath }: ISideScreenProps & { top: string }) => {
  const classes = useSideScreenStyles();

  return (
    <div className={classes.root}>
      <WithAnimation
        className={classes.screenWrap}
        defaultAnimation={false}
        addClassInView={classes.screenInView}
      >
        <img style={{top}} className={classes.screen} src={screenPath} alt="" />
      </WithAnimation>
    </div>
  );
};
