import { createAction } from 'redux-actions';

import getMovieAPI from '../../../apis/movieAPI';
import { put, call, takeEvery } from 'redux-saga/effects';
import types from './types';

//= ============== ACTIONS ===============//
// actions get movie by category
const movieByCategory = createAction(types.MOVIE_BY_CATEGORY);
const getSuccess = createAction(types.GET_SUCCESS);

export const actions = {
    movieByCategory
};

//= =============== SAGAS ===============//
export function* sagas() {
    yield takeEvery(types.MOVIE_BY_CATEGORY, movieByCategorySaga);
}

function* movieByCategorySaga(action) {
    const response = yield call(getMovieAPI, action.payload);
    yield put(getSuccess(response.data));
}
