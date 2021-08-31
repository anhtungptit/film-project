import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const movies = (state) => state.getIn(['movie', 'movies']);

export const selectors = {
    movies
};

//= ============== REDUCER ===============//
const initialState = fromJS({
    movies: []
});

const getSuccess = (state, action) => state.set('movies', action.payload);

const reducer = handleActions({
    [types.GET_SUCCESS]: getSuccess
}, initialState);

export default reducer;
