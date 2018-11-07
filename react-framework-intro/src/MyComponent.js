import React, { Component } from "react";
import {connect} from "react-redux";
import {setValue, setMoreValue} from "./reducers/MyReducer";
import {aThunk} from "./reducers/MyThunk";

class MyComponent extends Component {
    render() {
        let url = "https://api.ipify.org?format=json";

        return (
            <div>
                Value: {this.props.value}
                <br/>
                <input onChange={(event) => this.props.setValue(event.target.value)}/>
                <hr/>
                More Value: {this.props.moreValue}
                <br/>
                <input onChange={(event) => this.props.setMoreValue(event.target.value)}/>
                <hr/>
                My IP: {this.props.ip}
                <br/>
                <button onClick={() => this.props.fetch(url)}>get my ip thunk</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        value: state.value,
        moreValue: state.moreValue,
        ip: state.ip
    }
}

function mapActionToProps(dispatch) {
    return {
        setValue: (data) => dispatch(setValue(data)),
        setMoreValue: (data) => dispatch(setMoreValue(data)),
        fetch: (url) => dispatch(aThunk(url))
    }
}

export default connect(mapStateToProps, mapActionToProps)(MyComponent);