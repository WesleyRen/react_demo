import React, { Component } from "react";
import MyComponent from "./MyComponent";
import {UseFetcherDemo} from "./hooks/HooksStuff";
import JsxDemo from "./code-snippets/JsxDemo";

class App extends Component {

    render() {
        return (
            <div className="App">
                <h2>Redux stuff</h2>
                <MyComponent/>
                <h2>Hooks stuff</h2>
                <UseFetcherDemo>10</UseFetcherDemo>
                <h2>Code Snippets</h2>
                <JsxDemo.returnOfAListAndCallBackPropChildren/>
            </div>
        );
    }
}

export default App;
