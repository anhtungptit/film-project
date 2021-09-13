import { createAction } from 'redux-actions';

import loginUser, {loginFacebookAPI, loginGoogleAPI, saveHistoryAPI, signoutAPI, signupAPI} from '../../../apis/userAPI';
import {put, call, takeEvery} from 'redux-saga/effects';
import types from './types';

//= ============== ACTIONS ===============//
// actions login
const login = createAction(types.LOGIN);
const loginFacebook = createAction(types.LOGIN_FACEBOOK);
const loginGoogle = createAction(types.LOGIN_GOOGLE);
const loginSuccess = createAction(types.LOGIN_SUCCESS);
const signup = createAction(types.SIGNUP);
const signupSuccess = createAction(types.SIGNUP_SUCCESS);
const signout = createAction(types.SIGNOUT);
const signoutSuccess = createAction(types.SIGNOUT_SUCCESS);
const saveHistory = createAction(types.SAVE_HISTORY);

export const actions = {
    login,
    loginFacebook,
    loginGoogle,
    signup,
    signout,
    saveHistory
};

//= =============== SAGAS ===============//
export function* sagas() {
    yield takeEvery(types.LOGIN, loginSaga);
    yield takeEvery(types.LOGIN_FACEBOOK, loginFacebookSaga);
    yield takeEvery(types.LOGIN_GOOGLE, loginGoogleSaga);
    yield takeEvery(types.SIGNUP, signupSaga);
    yield takeEvery(types.SIGNOUT, signoutSaga);
    yield takeEvery(types.SAVE_HISTORY, saveHistorySaga);
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

function* signupSaga(action) {
    const response = yield call(signupAPI, action.payload.userName, action.payload.userEmail, action.payload.password);
    yield put(signupSuccess(response.data));
}

function* signoutSaga() {
    yield call(signoutAPI);
    yield put(signoutSuccess());
}

function* saveHistorySaga(action) {
    yield call(saveHistoryAPI, action.payload);
}
