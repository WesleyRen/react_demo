import React, { Component } from "react";
import MyComponent from "./MyComponent";
import {UseFetcherDemo} from "./hooks/HooksStuff";

class App extends Component {

    render() {
        return (
            <div className="App">
                <h2>Redux stuff</h2>
                <MyComponent/>
                <h2>Hooks stuff</h2>
                <UseFetcherDemo/>
            </div>
        );
    }
}

export default App;
