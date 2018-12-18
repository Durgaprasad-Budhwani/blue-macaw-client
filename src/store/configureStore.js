import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import configureSocket from '../sockets';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['songs'],
};

const configureStore = (history: any) => {
    const sagaMiddleware = createSagaMiddleware();
    const routeMiddleware = routerMiddleware(history);
    const persistedReducer = persistReducer(persistConfig, rootReducer(history));
    const socketMiddleware = configureSocket();

    // removing redux logging in production
    const middleware = process.env.NODE_ENV !== 'production' ? [sagaMiddleware, routeMiddleware, socketMiddleware]
        : [sagaMiddleware, routeMiddleware, socketMiddleware, createLogger()];

    // use devtools if developer chrome devtools in installed
    const composeEnhancer = process.env.NODE_ENV === 'production'
        && typeof window === 'object'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
    const store = createStore(
        persistedReducer,
        composeEnhancer(
            applyMiddleware(...middleware))
    );
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;
