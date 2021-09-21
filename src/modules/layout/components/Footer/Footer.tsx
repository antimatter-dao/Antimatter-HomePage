import React, { useCallback } from 'react';
import { useFooterStyles } from './useFooterStyles';
import { Container, Grid } from '@material-ui/core';
import classNames from 'classnames';
import { SocialLinks } from '../SocialLinks';
import { t } from '../../../../i18n/intl';
import { useIsSMDown } from '../../../theme';

export const Footer = () => {
  const classes = useFooterStyles();
  const isSMDown = useIsSMDown();

  const handleClick = useCallback(() => {
    let width = 600;
    let height = 700;
    if (isSMDown) {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    let params = `
    scrollbars=no,
    resizable=no,
    status=no,
    location=no,
    toolbar=no,
    menubar=no,
    width=${width},
    height=${height},
    left=${isSMDown ? 0 : 300},
    top=${isSMDown ? 0 : 300}`;

    open('/disclaimer', '/Disclaimer', params);
  }, [isSMDown]);

  return (
    <footer className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md className={classes.col}>
            {t('footer.copyrights', {
              year: new Date().getFullYear(),
            })}
            {!isSMDown && <>&nbsp;/&nbsp;</>}
            <span
              onClick={handleClick}
              className={classes.disclaimer}
              style={{ width: 'fit-content' }}
            >
              Notice and disclaimer
            </span>
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
