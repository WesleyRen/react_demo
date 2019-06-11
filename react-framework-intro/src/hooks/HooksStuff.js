import React, { Fragment, useEffect, useState } from 'react';

export function useFetcher(initValue, url, rejectMsg) {
    const [ varValue, setVarValue ] = useState({ value: initValue, loading: true });

    useEffect(() => {
        if (!url || !url.startsWith('http')) {
            console.log('Not a valid url');
            console.log(`url: [${url}]`);
            return;
        }
        const fetchConfig = {};
        // reset value:
        setVarValue({ value: [], loading: true });

        fetch(url, fetchConfig).then((response) => {
            switch (response.status) {
            case 200:
                return response.json();
            default:
                return Promise.reject(rejectMsg);
            }
        }).then((value) => {
            setVarValue({ value: value.results, loading: false });
        }).catch((error) => {
            setVarValue({ value: initValue, loading: false });
            console.log(error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ url ]);

    return varValue;
}

export function useInput(initialValue) {
    const [ value, setValue ] = useState(initialValue); // Tracking input.
    const [ url, setUrl ] = useState(initialValue); // only update URL when input is done.

    function onChange(e) {
        setValue(e.target.value);
    }

    function onBlur(e) {
        setUrl(e.target.value);
    }

    function onKeyPress(e) {
        if (e.key === 'Enter') {
            setUrl(e.target.value);
        }
    }

    return {
        value, url, onChange, onBlur, onKeyPress
    };
}


export function UseFetcherDemo() {
    const urlInput = useInput('https://randomuser.me/api/?results=5');
    const fetchResult = useFetcher([], urlInput.url, 'some error');

    return (
        <Fragment>
            <label htmlFor={urlInput}>Url input: {urlInput.value}
                <br />
                <input id='urlInput' size='50' {...urlInput} />
            </label>
            <br />
            {
                fetchResult.loading ? <div>loading...</div>
                    : (
                        <ul>
                            {fetchResult.value.map(item => <li key={item.email}>{item.email}</li>)}
                        </ul>
                    )
            }
        </Fragment>
    );
}
