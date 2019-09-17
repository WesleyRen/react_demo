import React, {createContext, ReactNode, useEffect, useReducer} from 'react';
import {initialState, reducer} from './reducers';
import useActions, {actionProp} from './actions';

const StoreContext = createContext(
    {state: initialState,
        dispatch: (value: actionProp) => {},
        actions: useActions(initialState, (value: actionProp) => {})
    }
);

const StoreProvider = (props: {children: ReactNode}) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    // Log new state
    useEffect(() => { console.log({ newState: state }); }, [ state ]);
    return (
        <StoreContext.Provider value={{ state, dispatch, actions }}>
            {props.children}
        </StoreContext.Provider>
    )
};

export { StoreContext, StoreProvider };
