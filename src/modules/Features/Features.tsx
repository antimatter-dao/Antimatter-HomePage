import React, { useCallback } from 'react';
import { useFeaturesStyles } from './useFeaturesStyles';
import { Box, Container, Grid } from '@material-ui/core';
import { SideScreen } from '../common/components/SideScreen';
import { SideContent } from '../common/components/SideContent';
import { t } from '../../i18n/intl';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { useIsLGUp, useIsMDDown } from '../theme';
import { WithAnimation } from '../WithAnimation';

export const Features = () => {
  const classes = useFeaturesStyles();

  const isLGUp = useIsLGUp();
  const isMDDown = useIsMDDown();

  const FeaturesCapsule = useCallback(
    () => (
      <div className={classes.featuresCapsule}>
        Antimatter Perpetual Options
      </div>
    ),
    [],
  );

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="features">
        <div className={classes.wrap}>
          <Container maxWidth={false} className={classes.container}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <SideContent
                  BrandLogo={FeaturesCapsule}
                  title={'Unlock perpetual options for all cryptocurrencies'}
                  text={
                    'Antimatter enables traders to speculate on future prices of cryptocurrencies by utilizing on-chain financial derivatives, called perpetual options. These tokenized perpetual options can be created and traded on the Antimatter platform.'
                  }
                  text2={
                    'The indicator price is based on the ratio between call and put options and determines the price of the tokens. Differences between the indicator price and spot price create arbitrage opportunities for investors.'
                  }
                  btnUrl="https://app.bounce.finance/"
                />
                {isMDDown && (
                  <SideScreen screenPath="images/option/screen.jpg" />
                )}
              </Grid>
              {isLGUp && (
                <Grid item xs={12} lg={6}>
                  <SideScreen screenPath="images/option/screen.jpg" />
                </Grid>
              )}
            </Grid>
          </Container>
          <Box margin="32px" className={classes.features}>
            <WithAnimation>
              <div className="features">Features</div>
            </WithAnimation>
            {isLGUp ? (
              <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                  <WithAnimation>
                    <ul>
                      <li>Non-custodial 24/7 global options tradin</li>
                      <li>No liquidation risk among all Call / Put options</li>
                      <li>
                        Verified on-chain settlement of each option contract{' '}
                      </li>
                    </ul>
                  </WithAnimation>
                </Grid>

                <Grid item xs={12} md={4}>
                  <WithAnimation>
                    <ul>
                      <li>No funding fees</li>
                      <li>
                        Underlying assets fully backed for Call / Put options
                      </li>
                      <li>Permissionless for everyone to issue options </li>
                    </ul>
                  </WithAnimation>
                </Grid>

                <Grid item xs={12} md={4}>
                  <WithAnimation>
                    <ul>
                      <li>No external oracle</li>
                      <li>
                        Exercise at any moment during the period of holding a
                        contract
                      </li>
                    </ul>
                  </WithAnimation>
                </Grid>
              </Grid>
            ) : (
              <WithAnimation>
                <ul>
                  <li>Non-custodial 24/7 global options tradin</li>
                  <li>No liquidation risk among all Call / Put options</li>
                  <li>Verified on-chain settlement of each option contract </li>
                  <li>No funding fees</li>
                  <li>Underlying assets fully backed for Call / Put options</li>
                  <li>Permissionless for everyone to issue options </li>
                  <li>No funding fees</li>
                  <li>Underlying assets fully backed for Call / Put options</li>
                  <li>Permissionless for everyone to issue options </li>
                </ul>
              </WithAnimation>
            )}
          </Box>
        </div>
      </div>
    </WithScrollFreezing>
  );
};
