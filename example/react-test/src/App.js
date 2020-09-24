import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pdf from './pdf.js'
import { getUrlParam } from './utils'

function App() {
  var file = getUrlParam('file');
  return (
    <div className="App">
      <Pdf src={file} />
    </div>
  );
}

export default App;
