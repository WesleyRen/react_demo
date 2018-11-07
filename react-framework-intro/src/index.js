import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import {Provider} from "react-redux";
import App from "./App";
import aReducer from "./reducers/MyReducer";

const store = createStore(aReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
