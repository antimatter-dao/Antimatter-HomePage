import React from 'react';
import { useBackedByStyles } from './useBackedByStyles';
import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { t } from '../../i18n/intl';
import { uid } from 'react-uid';
import { WithAnimation } from '../WithAnimation';
import { WithScrollFreezing } from '../WithScrollFreezing';

const name = (string: string) => {
  return string
    .slice(0, -4)
    .split('-')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
};

export const BackedBy = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      {match ? (
        <BackedByCore />
      ) : (
        <WithScrollFreezing>
          <BackedByCore />
        </WithScrollFreezing>
      )}
    </>
  );
};

const BackedByCore = () => {
  const classes = useBackedByStyles();

  const names = [
    'tekin-salimi.png',
    'do-kwon.png',
    'justin-sun.png',
    'brain-lee.png',
  ];

  const logos = [
    'ngc-ventures.svg',
    'monday-capital.svg',
    'huobi-defi-labs.svg',
  ];

  return (
    <>
      <div className={classes.filler} />
      <div className={classes.root} id="backed-by">
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation className={classes.title} Component={Typography}>
            {t('backed-by.title')}
          </WithAnimation>
          <Grid container justify="center">
            {names.map(img => {
              return (
                <WithAnimation
                  Component={Grid}
                  item
                  xs={6}
                  md={3}
                  className={classes.imgWrap}
                  key={uid(img)}
                >
                  <img
                    className={classes.profile}
                    src={`images/backed-by/${img}`}
                    alt=""
                  />
                  <span className={classes.name}>{name(img)}</span>
                </WithAnimation>
              );
            })}
          </Grid>
          <Grid container justify="center" style={{ marginTop: 60 }}>
            {logos.map(img => {
              return (
                <WithAnimation
                  Component={Grid}
                  item
                  xs={6}
                  lg={4}
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
    </>
  );
};
