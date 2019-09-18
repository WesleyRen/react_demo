import { types } from './reducers';

const useActions = (state, dispatch) => {
    function setUserList(payload) {
        dispatch({ type: types.SET_USER_LIST, payload });
    }
    function setRefreshTrigger(payload) {
        dispatch({ type: types.SET_REFRESH_TRIGGER, payload });
    }
    return {
        setUserList,
        setRefreshTrigger
    };
};

export default useActions;
