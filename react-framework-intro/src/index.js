import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {logger} from "redux-logger";
import App from "./App";
import {combo} from "./reducers/MyReducer";

const store = createStore(combineReducers(combo), applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
