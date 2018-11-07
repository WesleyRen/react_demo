export default function aReducer(value = "", action) {
    switch (action.type) {
        case 'setValue':
            return action.data;
        default:
            return value;
    }
}

export function setValue(data) {
    return {type: "setValue", data};
}