import React from 'react';
import logo from './logo.png';
import './App.css';
import Pdf from './pdf.js'
import { getUrlParam } from './utils'

function App() {
  var file = getUrlParam('file');
  if (file && file.indexOf('http') < 0) {
    file = `${window.location.origin}/hjmarket/hd/pdf/file/${file}`;
    if (file.indexOf('njJgxRisk.pdf') > 0) {
      document.title = '南京银行个人结构性存款风险揭示书'
    } else if (file.indexOf('njJgxTcp.pdf') > 0) {
      document.title = '南京银行个人结构性存款业务协议书'
    } else {
      document.title = '南京银行'
    }
  } else {
    document.title = '南京银行'
  }
  return (
    <div className="App">
      {file ?
        <Pdf src={file} />
        :
        <div>
          <br />
          usage:
          https://hostname/?file=fileurl
        </div>
      }
    </div>
  );
}

export default App;
