import React from 'react';
import { Layout } from '../src/modules/layout/components/Layout';
import { TopBlock } from '../src/modules/TopBlock';
import { Features } from '../src/modules/Features';
import { NFT } from '../src/modules/NFT';
import { DAO } from '../src/modules/DAO';
import { BackedBy } from '../src/modules/BackedBy';
import { BottomBlock } from '../src/modules/BottomBlock/BottomBlock';
import { StrategicPartner } from '../src/modules/StrategicPartner';

export default function Home() {
  return (
    <Layout locale="en-US">
      <TopBlock />
      <Features />
      <NFT />
      <DAO />
      <BackedBy />
      <StrategicPartner />
      <BottomBlock />
    </Layout>
  );
}
