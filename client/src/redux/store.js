import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useReducer } from './user/user.Slice';
import {persisReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user: useReducer})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistedReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persisReducer,
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store);