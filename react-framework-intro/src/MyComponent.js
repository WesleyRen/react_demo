import React, { Component } from "react";
import {connect} from "react-redux";
import {setValue} from "./reducers/MyReducer";

class MyComponent extends Component {
    render() {
        return (
            <p>
                Value: {this.props.value}
                <br/>
                <input onChange={(event) => this.props.setValue(event.target.value)}/>
            </p>
        )
    }
}


function stateMapper(state, props) {
    return {
        value: state.value
    }
}

function actionMapper(dispatch, props) {
    return {
        setValue: (data) => dispatch(setValue(data))
    }
}

export default connect(stateMapper, actionMapper)(MyComponent);