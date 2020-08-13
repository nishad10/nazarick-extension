import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';

import './Popup.css';

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
    const hash = axios.post('http://127.0.0.1:5000/shorten', {
      url: tabUrl,
    });
    hash.then((response) => {
      console.log(response);
      copyToClipboard(response.data.short);
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
      <header className="App-header">
        <Button type="primary" danger onClick={() => (tabUrl ? shortenUrl(tabUrl) : null)}>Shorten URL!</Button>
      </header>
    </div>
  );
};

export default Popup;
