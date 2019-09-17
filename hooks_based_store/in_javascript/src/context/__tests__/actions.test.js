import React, { useReducer } from 'react';
import { act, renderHook } from 'react-hooks-testing-library';
import mockConsole from 'jest-mock-console';

import useActions from '../actions';
import { initialState, reducer } from '../reducers';

describe('useActions', () => {
    it('setSearchString sets input as search string', () => {
        const { result } = renderHook(() => useReducer(reducer, initialState));
        let state = result.current[0];
        const dispatch = result.current[1];
        const actions = useActions(state, dispatch);
        act(() => actions.setSearchString('test'));
        [ state ] = result.current;
        expect(state.searchString).toBe('test');
    });

    it('setSearchResult sets payload as search result', () => {
        const { result } = renderHook(() => useReducer(reducer, initialState));
        let state = result.current[0];
        const dispatch = result.current[1];
        const actions = useActions(state, dispatch);
        act(() => actions.setSearchResult([ { tt: 'tt' } ]));
        [ state ] = result.current;
        expect(state.searchResult).toEqual([ { tt: 'tt' } ]);
    });

    it('setIsPopoverOpen sets popover to input, when a boolean is passed in', () => {
        const { result } = renderHook(() => useReducer(reducer, initialState));
        let state = result.current[0];
        const dispatch = result.current[1];
        const actions = useActions(state, dispatch);

        act(() => actions.setIsPopoverOpen(true));
        [ state ] = result.current;
        expect(state.isPopoverOpen).toBe(true);

        act(() => actions.setIsPopoverOpen(false));
        [ state ] = result.current;
        expect(state.isPopoverOpen).toBe(false);
    });

    it('setIsPopoverOpen sets popover open to false and logs an error, when a non-boolean value is passed in', () => {
        const restoreConsole = mockConsole(); // mockConsole returns a function to restore it back to normal

        const { result } = renderHook(() => useReducer(reducer, initialState));
        let state = result.current[0];
        const dispatch = result.current[1];
        const actions = useActions(state, dispatch);
        act(() => actions.setIsPopoverOpen('test'));
        [ state ] = result.current;
        expect(state.isPopoverOpen).toBe(false);
        expect(console.error).toHaveBeenCalled();

        restoreConsole();
    });

    it('setPopoverAnchorEl sets payload as popoverAnchorEl', () => {
        const { result } = renderHook(() => useReducer(reducer, initialState));
        let state = result.current[0];
        const dispatch = result.current[1];
        const actions = useActions(state, dispatch);
        const node = (
            <input
                className='MuiInputBase-input-110 SearchInput-inputInput-8'
                placeholder='Search…'
                type='text'
                value='test'
            />
        );
        act(() => actions.setPopoverAnchorEl(node));
        [ state ] = result.current;
        expect(state.popoverAnchorEl).toBe(node);
    });
});
