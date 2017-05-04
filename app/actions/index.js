import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function incrementCounter(counter) {
    return {
        type: types.INCREMENT,
        counter
    };
}

export function decrementCounter(counter) {
    return {
        type: types.DECREMENT,
        counter
    };
}
