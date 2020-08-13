import React, { useState } from 'react';
import axios from 'axios';

import { ButtonWrapper, Wrapper } from './PopupStyled.jsx';

require('dotenv').config()

const Popup = () => {
  const [tabUrl, setTabUrl] = useState();
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    ([currentTab]) => {
      setTabUrl(currentTab.url);
    }
  );
  const shortenUrl = () => {
    const hash = axios.post(`${process.env.NGROKSERVER}/shorten`, {
      url: tabUrl,
    });
    hash.then((response) => {
      copyToClipboard(`${process.env.NGROKSERVER}/s/${response.data.short}`);
    });
  };
  const copyToClipboard = (text) => {
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  };
  return (
    <div>
      <Wrapper>
        <header className="App-header">
          <ButtonWrapper type="primary" danger onClick={() => (tabUrl ? shortenUrl(tabUrl) : null)}>Shorten URL!</ButtonWrapper>
        </header>
      </Wrapper>
    </div>
  );
};

export default Popup;
