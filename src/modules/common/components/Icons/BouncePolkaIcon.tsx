import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export const BouncePolkaIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 43 30">
      <circle
        cx="15"
        cy="15"
        r="14"
        stroke="currentColor"
        fill="transparent"
        strokeWidth="2"
      />
      <circle cx="38" cy="25" r="5" fill="currentColor" />
    </SvgIcon>
  );
};
