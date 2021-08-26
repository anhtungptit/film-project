import { createAction } from 'redux-actions';

import loginUser, {loginFacebookAPI, loginGoogleAPI} from '../../../apis/userAPI';
import {put, call, takeEvery} from 'redux-saga/effects';
import types from './types';

//= ============== ACTIONS ===============//
// actions login
const login = createAction(types.LOGIN);
const loginFacebook = createAction(types.LOGIN_FACEBOOK);
const loginGoogle = createAction(types.LOGIN_GOOGLE);
const loginSuccess = createAction(types.LOGIN_SUCCESS);

export const actions = {
    login,
    loginFacebook,
    loginGoogle
};

//= =============== SAGAS ===============//
export function* sagas() {
    yield takeEvery(types.LOGIN, loginSaga);
    yield takeEvery(types.LOGIN_FACEBOOK, loginFacebookSaga);
    yield takeEvery(types.LOGIN_GOOGLE, loginGoogleSaga);
}

function* loginSaga(action) {
    const response = yield call(loginUser, action.payload);
    yield put(loginSuccess(response.data));
}

function* loginFacebookSaga(action) {
    const response = yield call(loginFacebookAPI, action.payload.userID, action.payload.accessToken);
    yield put(loginSuccess(response.data));
}

function* loginGoogleSaga(action) {
    const response = yield call(loginGoogleAPI, action.payload.tokenId);
    yield put(loginSuccess(response.data));
}
