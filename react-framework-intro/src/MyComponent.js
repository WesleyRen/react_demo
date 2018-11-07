import React, { Component } from "react";

export default class MyComponent extends Component {
    state = {
        value: ""
    };

    render() {
        return (
            <p>
                Value: {this.state.value}
                <br/>
                <input onChange={(event) => this.handleChange(event.target.value)}/>
            </p>
        )
    }

    handleChange(data) {
        console.log(data);
        this.setState({
            value: data,
        });
    }
}
