import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import App from "./App";
import {combo} from "./reducers/MyReducer";

const store = createStore(combineReducers(combo));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
