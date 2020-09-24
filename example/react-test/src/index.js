import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//去掉所有页面的console.log
if (process.env.NODE_ENV === "production") {
  //base64 => open_sys_log
  let sys_log = localStorage.getItem('b3Blbl9zeXNfbG9n')
  if (!sys_log) {
    console.log = function () { };
  }
} else {

}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
