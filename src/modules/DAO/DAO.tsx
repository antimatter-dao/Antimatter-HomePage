import React from 'react';
import { useDAOStyles } from './useDAOStyles';
import {
  Container,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { SideScreen } from '../common/components/SideScreen';
import { SideContent } from '../common/components/SideContent';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { useCallback } from 'react';

export const DAO = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      {match ? (
        <Core isUpLg={match} />
      ) : (
        <WithScrollFreezing>
          <Core isUpLg={match} />
        </WithScrollFreezing>
      )}
    </>
  );
};

function Core({ isUpLg }: { isUpLg: boolean }) {
  const classes = useDAOStyles();

  const DAOCapsule = useCallback(
    () => <div className={classes.DAOCapsule}>Antimatter DAO</div>,
    [],
  );

  const Features = useCallback(
    () => (
      <Box className={classes.features}>
        <div className="features">Features</div>
        <ul>
          <li>Onchain Governance</li>
          <li>Multiparty Dao treasury management</li>
          <li>Collective academic resources</li>
          <li>Experimental with new models</li>
        </ul>
      </Box>
    ),
    [],
  );
  return (
    <div className={classes.root} id="DAO">
      <div className={classes.wrap}>
        <Container maxWidth={false} className={classes.topContainer}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <SideContent
                BrandLogo={DAOCapsule}
                title={'A hub for research and exploration'}
                text={
                  'A collaborative workplace for innovative onchain derivative application'
                }
                btnUrl=""
                smallTitleStyle
              >
                {isUpLg ? (
                  <Features />
                ) : (
                  <SideScreen
                    screenPath="images/DAO/screen.png"
                    classname={classes.image}
                  />
                )}
              </SideContent>
            </Grid>
            <Grid item xs={12} lg={6}>
              {isUpLg ? (
                <SideScreen
                  screenPath="images/DAO/screen.png"
                  classname={classes.image}
                />
              ) : (
                <Features />
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
