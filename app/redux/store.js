import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

let extraMiddleware = [];

// if (__DEV__) {
//     const { logger } = require('redux-logger');
//     extraMiddleware.push(logger);
// }

//const store = compose(applyMiddleware(sagaMiddleware, ...extraMiddleware))(createStore)(rootReducer);

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware, ...extraMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;