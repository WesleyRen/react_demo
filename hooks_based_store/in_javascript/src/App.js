import React from 'react';

import { StoreProvider } from './context/StoreContext';
import { RefreshButton } from "./components/RefreshButton";
import { UserList } from "./components/UserList";

export default function App() {
    return (
        <StoreProvider>
            <RefreshButton />
            <UserList />
        </StoreProvider>
    );
}
