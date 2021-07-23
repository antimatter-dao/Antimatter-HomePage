import React from 'react';
import { useNFTStyles } from './useNFTStyles';
import { Container, Grid, Box } from '@material-ui/core';
import { SideScreen } from '../common/components/SideScreen';
import { SideContent } from '../common/components/SideContent';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { useCallback } from 'react';

export const NFT = () => {
  const classes = useNFTStyles();

  const NFTCapsule = useCallback(
    () => <div className={classes.NFTCapsule}>Nonfungible Finance</div>,
    [],
  );
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="NFT">
        <div className={classes.wrap}>
          <Container maxWidth={false} className={classes.topContainer}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <SideContent
                  isWhite
                  BrandLogo={NFTCapsule}
                  title={'Connecting DeFi and NFTs'}
                  text={
                    'The real use-case for NFTs lies in wrapping and packaging financial products'
                  }
                  btnUrl="https://fangible.com/"
                  smallTitleStyle
                >
                  <Box className={classes.features}>
                    <div className="features">Features</div>
                    <ul>
                      <li>
                        Issuance of NFTs with a combination of multiple
                        underlying assets
                      </li>
                      <li>
                        Financial ETFs and formation of customized indexes
                        through NFTs
                      </li>
                      <li>
                        Select asset to put into a locker NFT and you can choose
                        a release schedule for the token
                      </li>
                    </ul>
                  </Box>
                </SideContent>
              </Grid>
              <Grid item xs={12} lg={6}>
                <SideScreen screenPath="images/NFT/NFT_screen.jpg" />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};
