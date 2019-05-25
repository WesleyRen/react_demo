import React from 'react';
import { connect } from 'react-redux';
import { setMoreValue, setValue } from './reducers/MyReducer';
import { aThunk } from './reducers/MyThunk';

function MyComponent(props) {
    const url = 'https://api.ipify.org?format=json';
    const {
        value, moreValue, ip, fetch, localSetValue, localSetMoreValue
    } = props;

    return (
        <div>
            Value: {value}
            <br />
            <input onChange={event => localSetValue(event.target.value)} />
            <hr />
            More Value: {moreValue}
            <br />
            <input onChange={event => localSetMoreValue(event.target.value)} />
            <hr />
            My IP: {ip}
            <br />
            <button type='submit' onClick={() => fetch(url)}>get my ip thunk</button>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        value: state.value,
        moreValue: state.moreValue,
        ip: state.ip
    };
}

function mapActionToProps(dispatch) {
    return {
        localSetValue: (data) => dispatch(setValue(data)),
        localSetMoreValue: (data) => dispatch(setMoreValue(data)),
        fetch: url => dispatch(aThunk(url))
    };
}

export default connect(mapStateToProps, mapActionToProps)(MyComponent);
