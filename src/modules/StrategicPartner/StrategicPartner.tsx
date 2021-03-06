import React from 'react';
import { useStrategicPartnerStyles } from './useStrategicPartnerStyles';
import { Container, Grid, Typography } from '@material-ui/core';
import { uid } from 'react-uid';
import { WithAnimation } from '../WithAnimation';
import { useIsMDDown } from '../theme';

export const StrategicPartner = () => {
  const classes = useStrategicPartnerStyles();
  const isMDDown = useIsMDDown();

  const logos = [
    'arbitrum.png',
    'terra.png',
    'umbrella.svg',
    'elrond.svg',
    'impossible-finance.svg',
    'fantom.svg',
    'bnbchain.png',
    'spooky-swap.svg',
    'chain-swap.svg',
    'bounce.svg',
    'huobi-eco.svg',
    'linear.svg',
    'alameda-research.png',
    'element-fi.svg',
    'avalanche.svg',
    'pangolin.svg',
    'sushi.png',
    'near.svg',
  ];

  return (
    <div className={classes.root} id="strategic-partner">
      <Container maxWidth={false} className={classes.container}>
        <WithAnimation className={classes.title} Component={Typography}>
          Our strategic <br /> partners
        </WithAnimation>
        {isMDDown ? (
          <Grid container justify="center">
            {logos.map(img => {
              return (
                <WithAnimation
                  Component={Grid}
                  item
                  xs={6}
                  className={classes.imgWrap}
                  key={uid(img)}
                >
                  <img
                    className={classes.img}
                    src={`images/strategic-partner/${img}`}
                    alt=""
                  />
                </WithAnimation>
              );
            })}
          </Grid>
        ) : (
          <div className={classes.marqueeWrapper}>
            <WithAnimation
              className={classes.marquee}
              addClassInView={classes.marqueeInView}
            >
              {logos.map(img => {
                return (
                  <div className={classes.imgWrap} key={uid(img)}>
                    <img
                      className={classes.img}
                      src={`images/strategic-partner/${img}`}
                      alt=""
                    />
                  </div>
                );
              })}
              {logos.map(img => {
                return (
                  <div className={classes.imgWrap} key={uid(img)}>
                    <img
                      className={classes.img}
                      src={`images/strategic-partner/${img}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </WithAnimation>
          </div>
        )}
      </Container>
    </div>
  );
};
