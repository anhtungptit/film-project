import { combineReducers } from 'redux-immutable';

import example from './modules/example';
import user from './modules/user';

/**
 * Creates the root reducer with the asynchronously loaded ones
 */
export default function rootReducer(asyncReducers) {
    return combineReducers({
        example,
        user,
        ...asyncReducers
    });
}
