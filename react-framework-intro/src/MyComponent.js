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


function mapStateToProps(value) {
    console.log(value);
    return {
        value: value
    }
}

function mapActionToProps(dispatch) {
    return {
        setValue: (data) => dispatch(setValue(data))
    }
}

export default connect(mapStateToProps, mapActionToProps)(MyComponent);