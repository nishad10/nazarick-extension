import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './NewtabStyled.js';

const Newtab = () => {
  const [urlList, setUrlList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [tabID, setTabID] = useState(0);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    setTabID(tabs[0].id);
  });
  const subredditList = ['wholesomememes', 'Eyebleach', 'aww'];
  useEffect(() => {
    if (tabID !== 0) {
      const getRedditData = async () => {
        const redditData = await axios.get(
          `https://www.reddit.com/r/${
          subredditList[Math.floor(Math.random() * 2)]
          }/.json?count=50`
        );
        const items = redditData?.data?.data?.children;
        const urlList = items
          .map((item) => item.data.url ?? '')
          .filter(
            (item) =>
              item !== '' &&
              !item.includes('gfycat') &&
              /\.(jpe?g|tiff?|png|webp|bmp)$/i.test(item)
          );
        setUrlList(urlList);
      };
      getRedditData();
    }
  }, [tabID]);
  const rand = Math.floor(Math.random() * 10);
  return (
    <Wrapper className="App">
      <header className="App-header">
        {
          <img
            style={
              loaded
                ? {
                  width: '400px',
                  borderRadius: '25px',
                }
                : { display: 'none' }
            }
            src={urlList[urlList.length === 1 ? 0 : rand]}
            onLoad={() => setLoaded(true)}
          />
        }
      </header>
    </Wrapper>
  );
};

export default Newtab;
