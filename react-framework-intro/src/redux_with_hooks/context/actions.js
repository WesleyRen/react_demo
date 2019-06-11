import { types } from './reducers';

const useActions = (state, dispatch) => {
    function setSearchString(payload) {
        dispatch({ type: types.SET_SEARCH_STRING, payload });
    }
    function setSearchResult(payload) {
        dispatch({ type: types.SET_SEARCH_RESULT, payload });
    }
    return {
        setSearchString,
        setSearchResult
    };
};

export default useActions;
