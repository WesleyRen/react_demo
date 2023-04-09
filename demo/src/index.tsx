import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {logger} from "redux-logger";
import App from "./App";
import {combo} from "./reducers/MyReducer";
import reportWebVitals from './reportWebVitals';

const store = configureStore({
    reducer: combo, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

const container: HTMLElement = document.getElementById('root')!;

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<Provider store={store}><App /></Provider>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
