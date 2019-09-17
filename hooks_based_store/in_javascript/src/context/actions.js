import { types } from './reducers';

const useActions = (state, dispatch) => {
    function setUserList(payload) {
        dispatch({ type: types.SET_USER_LIST, payload });
    }
    function setToRefresh(payload) {
        dispatch({ type: types.SET_TO_REFRESH, payload });
    }
    return {
        setUserList,
        setToRefresh
    };
};

export default useActions;
