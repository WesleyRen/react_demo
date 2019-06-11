import React, { useContext, useEffect, useState } from 'react';

import useSearchEffect from './SearchFetch';
import { StoreContext } from '../context/StoreContext';

export default function SearchInput() {
    useSearchEffect();
    return (
        <div>
            {InputField()}
        </div>
    );
}

export function InputField() {
    const searchParams = new URLSearchParams(window.location.search);
    const { actions } = useContext(StoreContext);
    const [ inputString, setInputString ] = useState('');
    const onEnter = (e, searchString) => {
        actions.setSearchString(searchString);
        searchParams.set('q', searchString);
        window.history.pushState({}, '', `/search?${searchParams.toString()}`);
    };
    useEffect(() => {
        const searchString = searchParams.get('q');
        actions.setSearchString(searchString);
        setInputString(searchString);
    }, []);
    return (
        <div>
            <input
                placeholder='Search…'
                value={inputString}
                onChange={e => setInputString(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onEnter(e, inputString);
                    }
                }}
            />
        </div>
    );
}
