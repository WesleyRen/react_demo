import React from 'react';
import {StoreProvider} from "./context/StoreContext";
import {UserList} from "./components/UserList";
import {RefreshButton} from "./components/RefreshButton";

const App: React.FC = () => {
    return (
        <StoreProvider>
            <RefreshButton />
            <UserList />
        </StoreProvider>
    );
};

export default App;
