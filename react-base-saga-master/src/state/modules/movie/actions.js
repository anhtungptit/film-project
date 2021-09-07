import { createAction } from 'redux-actions';

import getDetailsFimAPI, { addCommentAPI } from '../../../apis/movieAPI';
import { put, call, takeEvery } from 'redux-saga/effects';
import types from './types';

//= ============== ACTIONS ===============//
// actions getDetailsFilm
const getDetailsFilm = createAction(types.GET_DETAILS_FILM);
const getSuccess = createAction(types.GET_SUCCESS);
const addComment = createAction(types.ADD_COMMENT);

export const actions = {
    getDetailsFilm,
    addComment
};

//= =============== SAGAS ===============//
export function* sagas() {
    yield takeEvery(types.GET_DETAILS_FILM, getDetailsFilmSaga);
    yield takeEvery(types.ADD_COMMENT, addCommentSaga);
}

function* getDetailsFilmSaga(action) {
    const response = yield call(getDetailsFimAPI, action.payload.id);
    yield put(getSuccess(response.data));
}

function* addCommentSaga(action) {
    yield call(addCommentAPI, action.payload);
}
