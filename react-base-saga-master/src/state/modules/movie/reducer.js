import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const movie = (state) => state.getIn(['movie', 'movie']);

export const selectors = {
    movie
};

//= ============== REDUCER ===============//
const initialState = fromJS({
    movie: null
});

const success = (state, action) => state.set('movie', fromJS(action.payload));

const reducer = handleActions({
    [types.GET_SUCCESS]: success
}, initialState);

export default reducer;
