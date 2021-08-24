import {
    all,
    fork
} from 'redux-saga/effects';
import { exampleSagas } from './modules/example';
import { userSagas } from './modules/user';

export default function* rootSaga() {
    yield all([
        fork(exampleSagas),
        userSagas()
    ]);
}
