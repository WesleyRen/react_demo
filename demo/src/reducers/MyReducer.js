function aReducer(value = "", action) {
    switch (action.type) {
        case 'setValue':
            return action.data;
        default:
            return value;
    }
}

function aMoreReducer(moreValue = "", action) {
    switch (action.type) {
        case 'setMoreValue':
            return action.data;
        default:
            return moreValue;
    }
}

function ipReducer(value = "", action) {
    switch (action.type) {
        case 'setIp':
            return action.data.ip;
        default:
            return value;
    }
}


export function setValue(data) {
    return {type: "setValue", data};
}

export function setMoreValue(data) {
    return {type: "setMoreValue", data};
}

export function setIp(data) {
    return {type: "setIp", data};
}

export const combo = {
    value: aReducer,
    moreValue: aMoreReducer,
    ip: ipReducer
};

