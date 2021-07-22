import React from 'react';
import { Layout } from '../src/modules/layout/components/Layout';
import { TopBlock } from '../src/modules/TopBlock';
import { Features } from '../src/modules/Features';
import { NFT } from '../src/modules/NFT';

export default function Home() {
  return (
    <Layout locale="en-US">
      <TopBlock />
      <Features />
      <NFT />
    </Layout>
  );
}
