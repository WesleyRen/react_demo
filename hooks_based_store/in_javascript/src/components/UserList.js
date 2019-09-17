import React, { useContext } from 'react';
import { StoreContext } from "../context/StoreContext";
import { useFetchUserListEffect } from "../utils/fetchUserList";

export function UserList() {
    const { state } = useContext(StoreContext);
    useFetchUserListEffect();

    if (state.userList.status === 'empty') {
        return <h3>Not Set</h3>;
    }

    if (state.userList.status === 'loading') {
        return <h3>Loading...</h3>;
    }

    if (state.userList.status === 'failed') {
        return <h3>{state.userList.error.toString()}</h3>;
    }

    return <pre>{JSON.stringify(state.userList.value, null, 4)}</pre>
}