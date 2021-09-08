import types from './types';
import { sagas, actions } from './actions';
import reducer, { selectors } from './reducer';

export default reducer;

export {
    types as adminTypes,
    sagas as adminSagas,
    actions as adminActions,
    selectors as adminSelectors
};
