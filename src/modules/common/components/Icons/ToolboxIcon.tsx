import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export const ToolboxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 29 23">
      <circle cx="4" cy="4" r="4" fill="currentColor" />
      <circle cx="25" cy="4" r="4" fill="currentColor" />
      <circle cx="15" cy="19" r="4" fill="currentColor" />
    </SvgIcon>
  );
};
