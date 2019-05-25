import { setIp } from './MyReducer';

export function aThunk(url) {
    // Invert control!
    // Return a function that accepts `dispatch` so we can dispatch later.
    // Thunk middleware knows how to turn thunk async actions into actions.

    return (dispatch) => {
        fetch(url)
            .then((response) => {
                switch (response.status) {
                case 200:
                    return response.json();
                default:
                    return Promise.reject(Promise.error('Error happened'));
                }
            })
            .then((data) => {
                dispatch(setIp(data));
            })
            .catch((error) => {
                dispatch(setIp(error));
            });
    };
}
