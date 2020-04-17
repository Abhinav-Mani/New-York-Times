import React from "react";
import { render } from "react-dom";
import * as serviceWorker from './serviceWorker';
import DashBoard from "./Components/Dashboard"
import "./Dashboard.css"

render(
  <React.StrictMode>
    <DashBoard/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
