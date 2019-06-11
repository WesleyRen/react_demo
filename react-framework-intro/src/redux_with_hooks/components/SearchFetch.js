import { useContext, useEffect } from 'react';
import { StoreContext } from '../context/StoreContext';
import { mockResult } from "./data";

export default function useSearchEffect() {
    const { state, actions } = useContext(StoreContext);
    useEffect(() => {
        const initValue = [];
        if (!state.searchString) {
            return;
        }
        actions.setSearchResult({ value: initValue, loading: true });
        setTimeout(() => actions.setSearchResult({ value: mockResult, loading: false }), 1000);
        // const url = `/rest/search?q=${state.searchString}`;
        // fetch(url).then((response) => {
        //     switch (response.status) {
        //         case 200:
        //             return response.json();
        //         default:
        //             console.log(response);
        //             return Promise.reject(new Error('Failed to load search results.'));
        //     }
        // }).then((result) => {
        //     actions.setSearchResult({ value: result, loading: false });
        // }).catch((error) => {
        //     actions.setSearchResult({ value: initValue, error, loading: false });
        // });
        // // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ state.searchString ]);
}
