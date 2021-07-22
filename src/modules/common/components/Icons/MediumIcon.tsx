import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export const MediumIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 20 12">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6C10 9.31371 7.76147 12 5 12C2.23853 12 0 9.31371 0 6C0 2.68629 2.23853 0 5 0C7.76147 0 10 2.68629 10 6ZM17 6C17 9.31371 15.8807 12 14.5 12C13.1193 12 12 9.31371 12 6C12 2.68629 13.1193 0 14.5 0C15.8807 0 17 2.68629 17 6ZM19.5 0C19.2239 0 19 0.223858 19 0.5V11.5C19 11.7761 19.2239 12 19.5 12C19.7761 12 20 11.7761 20 11.5V0.5C20 0.223858 19.7761 0 19.5 0Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
