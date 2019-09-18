import { types } from './reducers';

export type FetchState =
    {status: 'empty'} |
    {status: 'loading'} |
    {status: 'failed', error: string} |
    {status: 'success', value: JSON} |
    {status: 'success', value: Array<JSON>};

export type actionProp = {
    type: string;
    payload: any
}

const useActions = (state: {}, dispatch: (input: actionProp) => void) => {
    function setUserList(payload: FetchState) {
        dispatch({ type: types.SET_USER_LIST, payload });
    }
    function setRefreshTrigger(payload: number) {
        dispatch({ type: types.SET_REFRESH_TRIGGER, payload });
    }
    return {
        setUserList,
        setRefreshTrigger
    };
};

export default useActions;
