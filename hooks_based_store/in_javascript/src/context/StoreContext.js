import React, { createContext, useEffect, useRef, useReducer } from 'react';
import { initialState, reducer } from './reducers';
import useActions from './actions';

const StoreContext = createContext(initialState);

function useLogger([state, dispatch]) {
    const actionRef = useRef(null);

    const newDispatchRef = useRef(action => {
        actionRef.current = action;
        dispatch(action);
    });

    useEffect(() => {
        const action = actionRef.current;

        if (action) {
            console.group('Dispatch');
            console.log('Action: ', action);
            console.log('State: ', state);
            console.groupEnd();
        }
    }, [state]);

    return [state, newDispatchRef.current];
}

const StoreProvider = ({ children }) => {
    const [ state, dispatch ] = useLogger(useReducer(reducer, initialState));
    const actions = useActions(state, dispatch);
    return (
        <StoreContext.Provider value={{ state, dispatch, actions }}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreProvider };
