import React, { useState } from 'react';
import axios from 'axios';

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
    console.log('in');
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
    <div className="App">
      <header className="App-header">
        <button
          style={{
            background: '#1dd8e4',
            borderRadius: '11px',
            padding: '20px 45px',
            color: '#ffffff',
            display: 'inline-block',
            font: 'normal bold 20px/1 "Roboto", sans-serif',
            textAlign: 'center',
          }}
          onClick={() => (tabUrl ? shortenUrl(tabUrl) : null)}
        >
          Shorten URL!
        </button>
      </header>
    </div>
  );
};

export default Popup;
