import React from 'react';
import { useFooterStyles } from './useFooterStyles';
import { Container, Grid } from '@material-ui/core';
import classNames from 'classnames';
import { SocialLinks } from '../SocialLinks';
import { t } from '../../../../i18n/intl';

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md className={classes.col}>
            {t('footer.copyrights', {
              year: new Date().getFullYear(),
            })}
          </Grid>

          <Grid
            item
            xs={12}
            md
            className={classNames(classes.col, classes.socialCol)}
          >
            <SocialLinks />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
