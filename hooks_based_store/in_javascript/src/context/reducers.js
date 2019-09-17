
const initialState = {
    userList: [],
    toRefresh: false
};
const types = {
    SET_USER_LIST: 'SET_USER_LIST',
    SET_TO_REFRESH: 'SET_TO_REFRESH'
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_LIST:
            return {
                ...state,
                userList: action.payload
            };
        case types.SET_TO_REFRESH:
            return {
                ...state,
                toRefresh: action.payload
            };
        default:
            throw new Error('Unexpected action');
    }
};
export { initialState, types, reducer };
