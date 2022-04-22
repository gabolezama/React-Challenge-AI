import "babel-polyfill";
import "react-app-polyfill/ie11";
import ReactDOM from "react-dom";
import React from '../node_modules/react'
import App from "./Containers/App";

import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <App/>,
  document.getElementById("root")
);

serviceWorker.unregister();
