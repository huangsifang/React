import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Components/Test';

var oView = document.getElementsByTagName("blue-view");

ReactDOM.render(
  <Test />,
  oView[0]
);
