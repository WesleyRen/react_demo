import React, { Fragment, useContext } from 'react';
import {StoreContext} from "../context/StoreContext";

export function RefreshButton() {
    const { state, actions } = useContext(StoreContext);

    return <Fragment>
        <h4>Hooks based store in plain Javascript</h4>
        <button onClick={() => actions.setRefreshTrigger(state.refreshTrigger + 1)}>
            Refresh
        </button>
    </Fragment>
}
