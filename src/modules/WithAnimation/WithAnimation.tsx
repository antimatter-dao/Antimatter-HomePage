import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { useWithAnimationStyles } from './useWithAnimationStyles';
import classNames from 'classnames';

interface IAnimateInViewWrapProps {
  children?: ReactNode;
  Component?: any;
  triggerOnce?: boolean;
  className?: any;
  defaultAnimation?: boolean;
  addClassInView?: any;
  rootMargin?: string;
  [otherProp: string]: any;
}

export const WithAnimation = ({
  children,
  triggerOnce = true,
  Component = 'div',
  className,
  defaultAnimation = true,
  addClassInView,
  rootMargin = '-15% 0% -15% 0%',
  ...props
}: IAnimateInViewWrapProps) => {
  const classes = useWithAnimationStyles();

  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
    delay: 250,
  });

  return (
    <Component
      ref={ref}
      className={classNames(
        className,
        defaultAnimation && classes.awaitInView,
        defaultAnimation && inView && classes.inView,
        addClassInView && inView && addClassInView,
      )}
      {...props}
    >
      {children && children}
    </Component>
  );
};
