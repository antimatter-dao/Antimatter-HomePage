import React from 'react';
import { useBackedByStyles } from './useBackedByStyles';
import { Container, Grid, Typography } from '@material-ui/core';
import { t } from '../../i18n/intl';
import { uid } from 'react-uid';
import { WithAnimation } from '../WithAnimation';

export const BackedBy = () => {
  const classes = useBackedByStyles();

  const logos = [
    
    'coinbase-ventures.svg',
    'parafi.svg',
    'pantera.svg',
    'blockchain-capital.svg',
    'hashed.svg',
    'ngc.svg',
    'dhvc.svg',
    'snz.svg',
    'fundamental-labs.svg',
  ];

  const names = [
    'kain-warwick.svg',
    'george-lambeth.svg',
    'calvin-liu.svg',
    'stani-kulechov.svg',
  ];

  return (
    <div className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <WithAnimation className={classes.title} Component={Typography}>
          {t('backed-by.title')}
        </WithAnimation>
        <Grid container justify="center">
          {logos.map(img => {
            return (
              <WithAnimation
                Component={Grid}
                item
                xs={6}
                md={4}
                className={classes.imgWrap}
                key={uid(img)}
              >
                <img
                  className={classes.img}
                  src={`images/backed-by/${img}`}
                  alt=""
                />
              </WithAnimation>
            );
          })}
        </Grid>

        <hr className={classes.hr} />

        <Grid container justify="center">
          {names.map(img => {
            return (
              <WithAnimation
                Component={Grid}
                item
                xs={6}
                md={4}
                className={classes.imgWrap}
                key={uid(img)}
              >
                <img
                  className={classes.img}
                  src={`images/backed-by/${img}`}
                  alt=""
                />
              </WithAnimation>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
