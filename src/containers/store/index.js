import { createStore, compose} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducer';
export const store = createStore(reducers);
// sagaMiddleware.run(rootSaga);
// export const persistor = persistStore(store);
