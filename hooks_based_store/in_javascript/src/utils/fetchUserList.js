import {useContext, useEffect} from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {StoreContext} from '../context/StoreContext';

export function useFetchUserListEffect() {
    const { state, actions } = useContext(StoreContext);
    let mock = new MockAdapter(axios, { delayResponse: 1000 });
    mock.onGet().reply(200, [
            {userId: 'user_id_1' + Math.floor(Math.random() * 100), userName: 'User A'},
            {userId: 'user_id_2' + Math.floor(Math.random() * 100), userName: 'User B'},
            {userId: 'user_id_3' + Math.floor(Math.random() * 100), userName: 'User C'},
            {userId: 'user_id_4' + Math.floor(Math.random() * 100), userName: 'User D'},
        ]
    );

    useEffect(() => {
        actions.setUserList({ status: "loading" });

        axios
            .get('/rest/user_list')
            .then(response => response.data)
            .then((userList) => {
                actions.setUserList({ status: "success", value: userList });
            })
            .catch((error) => {
                actions.setUserList({ status: "failed", error: error });
            });

    }, [state.toRefresh]);
}
