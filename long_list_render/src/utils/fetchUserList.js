import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export function useFetchALongList(position, displayRows) {
    const [partialList, setPartialList] = useState({status: "loading", value: [], error: ""});
    let mock = new MockAdapter(axios, { delayResponse: 1000 });
    const mockData = [];
    for (let i = 0; i < displayRows; i++) {
        let name = "User " + Math.floor(Math.random() * 100 * position);
        mockData.push({userId: `user_id_${position}_${i}`, userName: name});
    }
    mock.onGet().reply(200, mockData);

    useEffect(() => {
        axios
            .get('/rest/long_list')
            .then(response => response.data)
            .then((partialList) => {
                setPartialList({ status: "success", value: partialList, error: "" });
            })
            .catch((error) => {
                setPartialList({ status: "failed", value: [], error: error });
            });

    }, [position, displayRows]);

    return partialList;
}
