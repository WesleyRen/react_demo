import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import {combo} from "./reducers/MyReducer";

const store = createStore(combineReducers(combo), applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
