export default function aReducer(state = {}, action) {
    switch (action.type) {
        case 'setValue':
            return {value: action.data};
        default:
            return state;
    }
}

export function setValue(data) {
    return {type: "setValue", data};
}