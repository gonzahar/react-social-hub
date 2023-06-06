import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import "./index.css";

import reducers from "./reducers";

import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    compose(applyMiddleware(thunk), composeEnhancers())
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
