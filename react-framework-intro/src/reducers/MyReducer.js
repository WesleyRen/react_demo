export default function aReducer(state = 0, action) {
    switch (action.type) {
        case 'setSomething':
            return action.value;
        default:
            return state;
    }
}