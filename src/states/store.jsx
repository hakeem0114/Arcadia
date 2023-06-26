import { configureStore } from '@reduxjs/toolkit'
import arcadiaReducer from './arcadiaSlice'

//Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



//Persist Setup
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, arcadiaReducer)

export const store = configureStore({
  reducer: {
    arcadia: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store);