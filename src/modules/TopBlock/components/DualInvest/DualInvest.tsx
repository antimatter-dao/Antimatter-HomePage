import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useDualInvestStyles } from './useDualInvestStyles';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import classNames from 'classnames';
import { WithAnimation } from '../../../WithAnimation';

export const DualInvest = () => {
  const classes = useDualInvestStyles();
  const isDownMd = useBreakpoint('md');

  return (
    <>
      <div className={classes.root}>
        <Box display="grid" gridGap={isDownMd ? '80px' : '50px'}>
          <Box
            display={isDownMd ? 'grid' : 'flex'}
            gridGap={isDownMd ? '32px' : '40px'}
            justifyContent="space-between"
            marginBottom={isDownMd ? '20px' : 0}
          >
            <WithAnimation>
              <div className={classes.title}>
                How Antimatter Dual Invest Works?
              </div>
            </WithAnimation>
            {/* <Button className={classes.watchButton}>
              Watch Explainer Video
            </Button> */}
          </Box>
          <Box
            display={isDownMd ? 'grid' : 'flex'}
            gridGap={isDownMd ? '80px' : '40px'}
          >
            <WithAnimation style={{ width: isDownMd ? '100%' : '50%' }}>
              <Box width={'100%'} className={classes.outlinedCard}>
                <img src="/images/dualInvest/step1.svg" alt="" />
                <div className={classNames(classes.capsule, 'green')}>
                  Step 01
                </div>
                <p>
                  Deposit currency and earn yield based on two assets with a
                  fixed rate
                </p>
              </Box>
            </WithAnimation>
            <WithAnimation style={{ width: isDownMd ? '100%' : '50%' }}>
              <Box width={'100%'} className={classes.outlinedCard}>
                <img src="/images/dualInvest/step2.svg" alt="" />
                <div className={classNames(classes.capsule, 'red')}>
                  Step 02
                </div>
                <p>
                  Each product has a strike price, delivery date and APY with
                  features of cover option
                </p>
              </Box>
            </WithAnimation>
          </Box>
          <Box
            display={isDownMd ? 'grid' : 'flex'}
            className={classes.outlinedCard}
            gridGap="40px"
            alignItems="flex-end"
          >
            <WithAnimation>
              <Box
                display="grid"
                alignItems="flex-start"
                gridGap="0"
                maxWidth={500}
              >
                <img src="/images/dualInvest/step3.svg" alt="" />
                <div className={classNames(classes.capsule, 'blue')}>
                  Step 03
                </div>

                <p>
                  On subscription the APY is locked in. On delivery date, your
                  will be settle in four ways:
                </p>
              </Box>
            </WithAnimation>

            <Box display="grid" flexGrow={1} gridGap="28px">
              <WithAnimation>
                <Box display="grid" flexGrow={1} gridGap="14px">
                  <h6>Up and Exercise</h6>
                  <ol>
                    <li>
                      {
                        'Settlement price < Strike price: Deposit currency + Fixed APY yield'
                      }
                    </li>
                    <li>
                      {
                        'Settlement price >= Strike price: Option yield + Fixed APY'
                      }
                    </li>
                  </ol>
                </Box>
              </WithAnimation>
              <WithAnimation>
                <Box display="grid" flexGrow={1} gridGap="14px">
                  <h6>Down and Exercise</h6>
                  <ol>
                    <li>
                      {
                        'Settlement price <= Strike price: Option yield + Fixed APY'
                      }
                    </li>
                    <li>
                      {
                        'Settlement price > Strike price: Deposit currency + Fixed APY yield'
                      }
                    </li>
                  </ol>
                </Box>
              </WithAnimation>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};
