import React from 'react';

import { StoreProvider } from './context/StoreContext';
import { RefreshButton } from "../../in_javascript/src/components/RefreshButton";
import { UserList } from "../../in_javascript/src/components/UserList";

export default function App() {
    return (
        <StoreProvider>
            <RefreshButton />
            <UserList />
        </StoreProvider>
    );
}
