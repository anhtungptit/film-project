import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const admin = (state) => state.getIn(['admin', 'admin']);

export const selectors = {
    admin
};

//= ============== REDUCER ===============//
const initialState = fromJS({
    admin: null
});

const success = (state, action) => state.set('admin', fromJS(action.payload));
const logoutSucess = (state) => state.set('admin', null);

const reducer = handleActions({
    [types.LOGIN_SUCCESS]: success,
    [types.LOGOUT_SUCCESS]: logoutSucess
}, initialState);

export default reducer;
