import { combineReducers } from 'redux-immutable';

import example from './modules/example';
import user from './modules/user';
import movie from './modules/movie';

/**
 * Creates the root reducer with the asynchronously loaded ones
 */
export default function rootReducer(asyncReducers) {
    return combineReducers({
        example,
        user,
        movie,
        ...asyncReducers
    });
}
