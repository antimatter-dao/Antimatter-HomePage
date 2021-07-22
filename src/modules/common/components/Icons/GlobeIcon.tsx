import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export const GlobeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 17 17">
      <path
        d="M14 14C12.5004 12.7497 10.5859 12 8.5 12C6.41414 12 4.49956 12.7497 3 14"
        stroke="currentColor"
        fill="transparent"
      />
      <circle
        cx="8.5"
        cy="8.5"
        r="7.5"
        stroke="currentColor"
        fill="transparent"
      />
      <ellipse
        cx="8.5"
        cy="8.5"
        rx="3.5"
        ry="7.5"
        stroke="currentColor"
        fill="transparent"
      />
      <path
        d="M14 3C12.4978 4.25071 10.5841 5 8.5 5C6.41593 5 4.50218 4.25071 3 3"
        stroke="currentColor"
        fill="transparent"
      />
      <path d="M1 8.5H16" stroke="currentColor" fill="transparent" />
      <path d="M8.5 1L8.5 16" stroke="currentColor" fill="transparent" />
    </SvgIcon>
  );
};
