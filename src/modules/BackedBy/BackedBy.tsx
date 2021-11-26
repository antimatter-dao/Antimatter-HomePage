import React from 'react';
import { useBackedByStyles } from './useBackedByStyles';
import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from '@material-ui/core';
import { t } from '../../i18n/intl';
import { uid } from 'react-uid';
import { WithAnimation } from '../WithAnimation';
import { WithScrollFreezing } from '../WithScrollFreezing';

const name = (string?: string) => {
  if (!string) return '';
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
    ['tekin-salimi.png', 'https://twitter.com/tekinsalimi?s=21'],
    ['do-kwon.png', 'https://twitter.com/stablekwon?s=21'],
    ['justin-sun.png', 'https://twitter.com/justinsuntron?s=21'],
    ['brain-lee.png', 'https://twitter.com/brian741'],
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
            {names.map(([img, link], idx) => {
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
                  <span className={classes.name}>
                    {name(img)}
                    {link && (
                      <Button
                        className={classes.twitter}
                        component="a"
                        href={link}
                        rel="noopener noreferrer"
                        target="_blank"
                        data-index={idx}
                        variant="text"
                      >
                        <img
                          src={`images/backed-by/twitter/twitter${idx}.png`}
                        />
                        <img src="images/backed-by/twitter/twitter.svg" />
                      </Button>
                    )}
                  </span>
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
                    style={
                      img.includes('ngc')
                        ? {
                            transformOrigin: '50% 50%',
                            transform: 'scale(0.9)',
                          }
                        : undefined
                    }
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
