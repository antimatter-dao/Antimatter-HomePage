import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useWithScrollFreezingStyles } from './useWithScrollFreezingStyles';
import classNames from 'classnames';
import { PARALLAX_MARGIN } from '../theme/const';

interface IWithScrollFreezingProps {
  children: ReactNode;
  isChainBlock?: boolean;
}

export const WithScrollFreezing = ({
  children,
  isChainBlock,
}: IWithScrollFreezingProps) => {
  const classes = useWithScrollFreezingStyles();

  const [wrapHeight, setWrapHeight] = useState('auto');
  const [floatingWrapClass, setFloatingWrapClass] = useState(classes.notFixed);

  const wrapRef = useRef(null);
  const floatingWrapRef = useRef(null);

  const getWrapHeight = useCallback(() => {
    if (floatingWrapRef.current) {
      const floatingWrap: any = floatingWrapRef.current;
      const height = floatingWrap?.offsetHeight;
      setWrapHeight(height ?? 'auto');
    }
  }, [floatingWrapRef]);

  const toggleFreezing = useCallback(() => {
    const wrap: any = wrapRef.current;
    const wrapBottom = wrap?.offsetHeight + wrap?.offsetTop;
    const scrollTop = window.scrollY + window.innerHeight;
    if (isChainBlock) {
      if (wrapBottom + PARALLAX_MARGIN <= scrollTop) {
        setFloatingWrapClass(classes.chainBlockFixed);
      } else {
        setFloatingWrapClass(classes.notFixed);
      }
    } else {
      const scrollTopForEffect =
        window.scrollY - PARALLAX_MARGIN + window.innerHeight / 2;

      const wrapBottomFallBack = wrap?.offsetHeight * 2 + wrap?.offsetTop;
      if (scrollTop > wrapBottom && scrollTop < wrapBottomFallBack) {
        if (scrollTopForEffect > wrapBottom) {
          {
            setFloatingWrapClass(
              classNames(classes.fixed, classes.fixedWithEffect),
            );
          }
        } else {
          setFloatingWrapClass(classes.fixed);
        }
      } else {
        setFloatingWrapClass(classes.notFixed);
      }
    }
  }, [floatingWrapRef]);

  useEffect(() => {
    getWrapHeight();
    toggleFreezing();
    window.addEventListener('ready', getWrapHeight);
    window.addEventListener('resize', getWrapHeight);
    window.addEventListener('scroll', toggleFreezing);
    return () => {
      window.removeEventListener('ready', getWrapHeight);
      window.removeEventListener('resize', getWrapHeight);
      window.removeEventListener('scroll', toggleFreezing);
    };
  }, []);

  return (
    <div ref={wrapRef} className={classes.root} style={{ height: wrapHeight }}>
      <div
        ref={floatingWrapRef}
        className={classNames(classes.floatingWrap, floatingWrapClass)}
      >
        {children}
      </div>
    </div>
  );
};
