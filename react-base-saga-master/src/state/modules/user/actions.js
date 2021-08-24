import { createAction } from 'redux-actions';

import loginUser from '../../../apis/userAPI';
import {put, call, takeLatest} from 'redux-saga/effects';
import types from './types';

//= ============== ACTIONS ===============//
// actions login
const login = createAction(types.LOGIN);
// const loginFail = createAction(types.LOGIN_FAIL);
const loginSuccess = createAction(types.LOGIN_SUCCESS);

export const actions = {
    login
};

//= =============== SAGAS ===============//
export function* sagas() {
    yield takeLatest(types.LOGIN, loginSaga);
}

function* loginSaga(action) {
    const response = yield call(loginUser, action.payload);
    yield put(loginSuccess(response));
}
