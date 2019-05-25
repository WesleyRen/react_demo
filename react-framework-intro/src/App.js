import React from 'react';
import MyComponent from './MyComponent';
import { UseFetcherDemo } from './hooks/HooksStuff';
import MemoVsCallback from './hooks/MemoVsCallback';

export default function App() {
    return (
        <div className='App'>
            <h2>Redux stuff</h2>
            <MyComponent />
            <h2>Hooks stuff</h2>
            <UseFetcherDemo />
            <h2>useMemo vs useCallback</h2>
            <MemoVsCallback />
        </div>
    );
}
