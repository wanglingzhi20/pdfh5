import React from 'react';
import logo from './logo.png';
import './App.css';
import Pdf from './pdf.js'
import { getUrlParam } from './utils'

function App() {
  var file = getUrlParam('file');
  if (file && file.indexOf('http') < 0) {
    file = `${window.location.origin}/hjmarket/hd/pdf/file/${file}`;
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
