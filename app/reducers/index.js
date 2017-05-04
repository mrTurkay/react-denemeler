import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import * as types from '../actions/types';

import { counter } from './counter-reducer';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    filter,
    counter,
    routing
});

export default rootReducer;
