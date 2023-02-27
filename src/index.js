import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import App from "./components/postList";
import reducers from "./reducer";

const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
