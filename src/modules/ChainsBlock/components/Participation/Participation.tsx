import React from 'react';
import { useParticipationStyles } from './useParticipationStyles';
import { WithAnimation } from '../../../WithAnimation';
import { t } from '../../../../i18n/intl';
import { Typography } from '@material-ui/core';

export const Participation = () => {
  const classes = useParticipationStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <WithAnimation
          className={classes.title}
          Component={Typography}
          variant="h2"
        >
          <span className={classes.titleOne}>
            {t('chains-block.participation.title.part-one')}
          </span>
          <span className={classes.titleTwo}>
            {t('chains-block.participation.title.part-two')}
          </span>
        </WithAnimation>

        <div className={classes.textWrap}>
          <WithAnimation className={classes.text} Component={Typography}>
            {t('chains-block.participation.text')}
          </WithAnimation>
        </div>
      </div>

      <div className={classes.listWrap}>
        <div className={classes.list}>
          <WithAnimation className={classes.listItem}>
            {t('chains-block.participation.item1')}
            <div className={classes.listItemNum}>01</div>
          </WithAnimation>
          <WithAnimation className={classes.listItem}>
            {t('chains-block.participation.item2')}
            <div className={classes.listItemNum}>02</div>
          </WithAnimation>
          <WithAnimation className={classes.listItem}>
            {t('chains-block.participation.item3')}
            <div className={classes.listItemNum}>03</div>
          </WithAnimation>
        </div>
      </div>

      <WithAnimation rootMargin="-10% 0% -10% 0%" className={classes.hint}>
        {t('chains-block.participation.hint')}
      </WithAnimation>
    </div>
  );
};
