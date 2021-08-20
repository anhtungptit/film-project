import { combineReducers } from 'redux-immutable';

import example from './modules/example';

/**
 * Creates the root reducer with the asynchronously loaded ones
 */
export default function rootReducer(asyncReducers) {
    return combineReducers({
        example,
        ...asyncReducers
    });
}
