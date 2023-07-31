import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import userReducer from './User/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const logger = createLogger();

const persistConfig = {
    key: 'user',
    storage: storage,
};

const rootReducer = combineReducers({
    user: userReducer
});

const reducerPersist = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: reducerPersist,
    middleware: [logger]
});

const persistor = persistStore(store);

export {
    store,
    persistor
};