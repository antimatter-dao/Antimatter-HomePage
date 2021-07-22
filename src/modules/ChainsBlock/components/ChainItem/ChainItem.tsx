import React, { ReactNode } from 'react';
import { useChainItemStyles } from './useChainItemStyles';
import classNames from 'classnames';

interface IChaiItemProps {
  label: string;
  icon: ReactNode;
  className?: any;
}

export const ChainItem = ({ label, icon, className }: IChaiItemProps) => {
  const classes = useChainItemStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.icon}>{icon}</div>
      {/* <div className={classes.label}>{label}</div> */}
    </div>
  );
};
