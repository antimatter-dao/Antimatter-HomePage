import React from 'react';
import { Box } from '@material-ui/core';
import { useProductsBlockStyles } from './useProductsBlockStyles';
import { Tiles } from './components/Tiles';
import { WithAnimation } from '../../../WithAnimation';

export const ProductsBlock = () => {
  const classes = useProductsBlockStyles();

  return (
    <>
      <Box display="grid" className={classes.root}>
        <Box display="grid" style={{ margin: '0 auto' }}>
          <WithAnimation>
            <h5 className={classes.title}>
              <img
                alt=""
                src="/images/labs/icon.png"
                style={{ mixBlendMode: 'multiply' }}
              />
              Antimatter Labs.
              <br /> We keep innovating
            </h5>
          </WithAnimation>
          <Tiles />
        </Box>
      </Box>
    </>
  );
};
