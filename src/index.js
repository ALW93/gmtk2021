import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import './styles/main.scss'
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
