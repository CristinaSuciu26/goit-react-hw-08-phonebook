import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/slices';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedContacts = persistReducer(persistConfig, contactSlice.reducer);

const persistedReducer = combineReducers({
  contacts: persistedContacts,
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
