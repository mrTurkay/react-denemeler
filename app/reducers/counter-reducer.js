import * as types from '../actions/types';

const CounterInitialState = 0;
export const counter = (state = CounterInitialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
