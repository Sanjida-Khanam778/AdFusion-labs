import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userReducer from '../redux/features/User/UserSlice'; // User slice
import { api } from '../redux/features/Api/ApiSlice'; // RTK Query apiSlice
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    user: userReducer,
    [api.reducerPath]: api.reducer,
  }); 

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
  };
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          ignoredActionPaths: ["register", "rehydrate"],
        },
      }).concat(api.middleware),
  });

export const persistor = persistStore(store);