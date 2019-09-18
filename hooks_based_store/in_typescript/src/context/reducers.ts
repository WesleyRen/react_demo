import React from 'react';
import {actionProp, FetchState} from "./actions";

export type ReducerState = {
    userList: FetchState,
    refreshTrigger: number
};

const initialState: Readonly<ReducerState> = {
    userList: { status: "empty" },
    refreshTrigger: 0,
};
const types = {
    SET_USER_LIST: 'SET_USER_LIST',
    SET_REFRESH_TRIGGER: 'SET_REFRESH_TRIGGER'
};
const reducer: React.Reducer<ReducerState, actionProp> = (state, action) => {
    switch (action.type) {
        case types.SET_USER_LIST:
            return {
                ...state,
                userList: action.payload
            };
        case types.SET_REFRESH_TRIGGER:
            return {
                ...state,
                refreshTrigger: action.payload
            };
        default:
            throw new Error('Unexpected action');
    }
};
export { initialState, types, reducer };
