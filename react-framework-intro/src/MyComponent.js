import React, { Component } from "react";
import {connect} from "react-redux";
import {setValue, setMoreValue} from "./reducers/MyReducer";

class MyComponent extends Component {
    render() {
        return (
            <div>
                Value: {this.props.value}
                <br/>
                <input onChange={(event) => this.props.setValue(event.target.value)}/>
                <hr/>
                More Value: {this.props.moreValue}
                <br/>
                <input onChange={(event) => this.props.setMoreValue(event.target.value)}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return {
        value: state.value,
        moreValue: state.moreValue
    }
}

function mapActionToProps(dispatch) {
    return {
        setValue: (data) => dispatch(setValue(data)),
        setMoreValue: (data) => dispatch(setMoreValue(data))
    }
}

export default connect(mapStateToProps, mapActionToProps)(MyComponent);