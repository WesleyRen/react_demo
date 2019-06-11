import React from 'react';
import MyComponent from './MyComponent';
import { UseFetcherDemo } from './hooks/HooksStuff';
import MemoVsCallback from './hooks/MemoVsCallback';
import Search from './redux_with_hooks/components/Search';
import { StoreProvider } from "./redux_with_hooks/context/StoreContext";

export default function App() {
    return (
        <div className='App'>
            <h2>Redux stuff</h2>
            <MyComponent />
            <h2>Hooks stuff</h2>
            <UseFetcherDemo />
            <h2>useMemo vs useCallback</h2>
            <MemoVsCallback />
            <h2>Redux with hooks. Begin.</h2>
            <StoreProvider>
                <Search />
            </StoreProvider>
            <h2>Redux with hooks. End.</h2>
        </div>
    );
}
