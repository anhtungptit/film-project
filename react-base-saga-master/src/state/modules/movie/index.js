import types from './types';
import { sagas, actions } from './actions';
import reducer, { selectors } from './reducer';

export default reducer;

export {
    types as movieTypes,
    sagas as movieSagas,
    actions as movieActions,
    selectors as movieSelectors
};
