import React from 'react';
import { useBottomBlockStyles } from './useBottomBlockStyles';
import { WithAnimation } from '../WithAnimation';
import { Box, Button } from '@material-ui/core';
import classNames from 'classnames';
import { useIsMDDown } from '../theme';

const posts = [
  {
    imgUrl: 'bitMexPost.png',
    url: `https://blog.bitmex.com/all-ye-faithful/?utm_source=Twitter&utm_medium=socialmedia&utm_campaign=CTD150ct`,
    postBy: 'bitMex.png',
    date: 'Oct 14, 2021',
    title: 'All Ye Faithful',
    buttonColor: 'green',
    synopsis:
      'Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the faithful with FUD in service to their master. These slimy serpents slither and yearn to surreptitiously slip allegiance to their false gods into our consciousness. Why do such...',
  },
  {
    imgUrl: 'marketWatchPost.png',
    url: `https://www.marketwatch.com/press-release/antimatter-perpetrual-options-launches-on-eth-arbitrum-avax-terra-bsc-more-2021-10-08`,
    postBy: 'marketWatch.png',
    title:
      'AntiMatter Perpetrual Options Launches on ETH, Arbitrum, AVAX, Terra, BSC, & More',
    buttonColor: 'yellow',
    date: 'Oct 8, 2021',
    synopsis:
      'AntiMatter, a next generation decentralized financial (DeFi) derivative platform, has announced that its Mainnet launch on 8 October on multiple blockchains including ETH, Arbitrum (ETH L2), AVAX, BSC with more to come including Terra (LUNA) and NEAR (via Aurora)…',
  },
  {
    imgUrl: 'yahooNewsPost.png',
    url: `https://www.yahoo.com/news/antimatter-perpetrual-options-launches-eth-120900244.html`,
    postBy: 'bitMex.png',
    date: 'Oct 8, 2021',
    title:
      'AntiMatter Perpetrual Options Launches on ETH, Arbitrum, AVAX, Terra, BSC, & More',
    buttonColor: 'blue',
    synopsis:
      'AntiMatter, a next generation decentralized financial (DeFi) derivative platform, has announced that its Mainnet launch on 8 October on multiple blockchains including ETH, Arbitrum (ETH L2), AVAX, BSC with more to come including Terra (LUNA) and NEAR (via Aurora)…',
  },

  {
    imgUrl: 'coinTelegraphPost.png',
    url: `https://cointelegraph.com/press-releases/antimatter-dao-a-club-for-derivatives-fanatics/amp?__twitter_impression=true`,
    postBy: 'coinTelegraph.png',
    title: 'AntiMatter DAO: A club for derivatives fanatics',
    buttonColor: 'red',
    date: 'Oct 25, 2021',
    synopsis:
      'We are beyond excited to introduce AntiMatter DAO, a club for derivatives fanatics and a collaborative workplace for innovative on-chain derivatives applications, with feautures including on-chain governance, multy-party treasure management, academic…',
  },
];

export const BottomBlock = () => {
  const classes = useBottomBlockStyles();
  const isDownMD = useIsMDDown();

  return (
    <div className={classes.root} id="bottom-block">
      <div className={classes.posts}>
        {posts.map(post => (
          <WithAnimation key={post.imgUrl}>
            <div className={classes.post}>
              <img src={`/images/posts/${post.imgUrl}`} alt=""></img>
              <Box
                padding={isDownMD ? '25px 25px 40px' : '40px 48px 59px'}
                gridGap="8px"
                display="grid"
              >
                <WithAnimation>
                  <Box fontWeight={700} fontSize="24px">
                    {post.title}
                  </Box>
                </WithAnimation>
                <WithAnimation>
                  <Box display="flex" gridGap="12px">
                    <Box
                      style={{
                        borderRadius: 30,
                        padding: '4px 12px',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {post.date}
                    </Box>
                    <img
                      src={`/images/posts/${post.postBy}`}
                      style={{ width: 'auto', flexGrow: 0 }}
                    />
                  </Box>
                </WithAnimation>
                <WithAnimation>
                  <p
                    style={{ fontSize: 16, color: 'rgb(35,35,35)', margin: 0 }}
                  >
                    {post.synopsis}
                  </p>
                </WithAnimation>
                <WithAnimation>
                  <Button
                    className={classNames(
                      classes.btn,
                      classes[post.buttonColor],
                    )}
                    variant="contained"
                    href={post.url}
                    role="link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Read more
                    <svg width="12" height="13" viewBox="0 0 12 13">
                      <path
                        d="M11.1966 11.2888V1.49804M11.1966 1.49804H1.40589M11.1966 1.49804L0.589996 12.1046"
                        stroke="#232323"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Button>
                </WithAnimation>
              </Box>
            </div>
          </WithAnimation>
        ))}
      </div>
      <div className={classes.blog}>
        <WithAnimation className={classes.blogText}>
          Want to be aware of all the news and updates? Read our blog
        </WithAnimation>
        <WithAnimation className={classes.blogButton}>
          <Button
            component="a"
            href="https://medium.com/@antimatterdefi"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to Medium
          </Button>
        </WithAnimation>
      </div>
    </div>
  );
};
