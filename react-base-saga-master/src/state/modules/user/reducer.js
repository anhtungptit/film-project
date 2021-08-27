import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const user = (state) => state.getIn(['user', 'user']);

export const selectors = {
    user
};

//= ============== REDUCER ===============//
const initialState = fromJS({
    user: null
});

const success = (state, action) => state.set('user', fromJS(action.payload));

const reducer = handleActions({
    [types.LOGIN_SUCCESS]: success,
    [types.SIGNUP_SUCCESS]: success
}, initialState);

export default reducer;
