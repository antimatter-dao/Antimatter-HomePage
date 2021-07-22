import React from 'react';
import { useSideContentStyles } from './useSideContentStyles';
import { Typography } from '@material-ui/core';
import { WithAnimation } from '../../../WithAnimation';
import classNames from 'classnames';

interface ISideContentProps {
  BrandLogo?: any;
  brandName?: string;
  title: string;
  text: string;
  btnUrl: string;
  text2?: string;
  smallTitleStyle?: boolean;
  isWhite?: boolean;
  children?: React.ReactNode;
}

export const SideContent = ({
  BrandLogo,
  brandName,
  title,
  text,
  text2,
  smallTitleStyle = false,
  isWhite,
  children,
}: ISideContentProps) => {
  const classes = useSideContentStyles({ isWhite });

  return (
    <div className={classes.root}>
      <WithAnimation className={classes.brand}>
        {BrandLogo && <BrandLogo className={classes.brandLogo} />}
        {brandName && <span className={classes.brandName}>{brandName}</span>}
      </WithAnimation>

      <WithAnimation
        className={classNames(
          classes.title,
          smallTitleStyle && classes.titleSm,
        )}
        Component={Typography}
        variant="h2"
      >
        {title}
      </WithAnimation>
      <WithAnimation className={classes.text} Component={Typography}>
        {text}
      </WithAnimation>
      {text2 && (
        <WithAnimation className={classes.text} Component={Typography}>
          {text2}
        </WithAnimation>
      )}
      {children && <WithAnimation>{children}</WithAnimation>}
    </div>
  );
};
