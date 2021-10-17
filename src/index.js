import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import Providers from "store";
import App from "./App";

import "./reset.css";
import "./global.css";

ReactDOM.render(
  <Router>
    <Providers>
      <App />
    </Providers>
  </Router>,
  document.getElementById("root")
);
