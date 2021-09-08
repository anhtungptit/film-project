import { createAction } from 'redux-actions';

import loginAdminAPI, { logoutAdminAPI } from '../../../apis/adminAPI';
import { put, call, takeEvery} from 'redux-saga/effects';
import types from './types';

//= ============== ACTIONS ===============//
// actions login admin
const loginAdmin = createAction(types.LOGIN_ADMIN);
const loginSuccess = createAction(types.LOGIN_SUCCESS);
const logoutAdmin = createAction(types.LOGOUT_ADMIN);
const logoutSuccess = createAction(types.LOGOUT_SUCCESS);

export const actions = {
    loginAdmin,
    logoutAdmin
};

//= =============== SAGAS ===============//
export function* sagas() {
    yield takeEvery(types.LOGIN_ADMIN, loginAdminSaga);
    yield takeEvery(types.LOGOUT_ADMIN, logoutAdminSaga);
}

function* loginAdminSaga(action) {
    const response = yield call(loginAdminAPI, action.payload);
    yield put(loginSuccess(response.data));
}

function* logoutAdminSaga() {
    yield call(logoutAdminAPI);
    yield put(logoutSuccess());
}
