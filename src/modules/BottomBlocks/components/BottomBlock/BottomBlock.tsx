import React from 'react';
import { useBottomBlockStyles } from './useBottomBlockStyles';
import { WithAnimation } from '../../../WithAnimation';
import { Button, Container, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { t } from '../../../../i18n/intl';

interface IBottomBlockProps {
  id: string;
  BrandLogo: any;
  brandName: string;
  title: string;
  text: string;
  href?: string;
  isSecond?: boolean;
}

export const BottomBlock = ({
  id,
  BrandLogo,
  brandName,
  title,
  text,
  href,
  isSecond = false,
}: IBottomBlockProps) => {
  const classes = useBottomBlockStyles();

  return (
    <div
      className={classNames(classes.root, isSecond && classes.secondStyles)}
      id={id}
    >
      <Container maxWidth={false} className={classes.container}>
        <div className={classes.tileTop}>
          <WithAnimation className={classes.brand}>
            <BrandLogo className={classes.brandLogo} />
            <div className={classes.brandContent}>
              <div className={classes.brandName}>{brandName}</div>
              {!href && (
                <div className={classes.tileComingSoon}>
                  {t('common.coming-soon')}
                </div>
              )}
            </div>
          </WithAnimation>
        </div>

        <WithAnimation
          className={classes.title}
          Component={Typography}
          variant="h2"
        >
          {title}
        </WithAnimation>
        <WithAnimation className={classes.text} Component={Typography}>
          {text}
        </WithAnimation>
        {href && (
          <WithAnimation className={classes.btnWrap}>
            <Button
              className={classes.btn}
              variant="contained"
              href={href}
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.launch-app')}
            </Button>
          </WithAnimation>
        )}
      </Container>
    </div>
  );
};
