const initialState = {
    searchString: '',
    searchResult: { value: [], loading: false }
};
const types = {
    SET_SEARCH_STRING: 'SET_SEARCH_TEXT',
    SET_SEARCH_RESULT: 'SET_SEARCH_RESULT'
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload
            };
        case types.SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload
            };
        default:
            throw new Error('Unexpected action');
    }
};
export { initialState, types, reducer };
