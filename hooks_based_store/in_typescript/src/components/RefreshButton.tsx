import React, {Fragment, useContext} from 'react';
import {StoreContext} from "../context/StoreContext";

export const RefreshButton: React.FC = () => {
    const { state, actions } = useContext(StoreContext);

    return <Fragment>
        <h4>Hooks based store in plain Typescript</h4>
        <button onClick={() => actions.setToRefresh(!state.toRefresh)}>
            Refresh
        </button>
    </Fragment>

};