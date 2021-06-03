//libs
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

//reducer
import { rootReducer } from './rootReducer';

const isDevelopment = process.env.NODE_ENV !== 'production';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
});

if (isDevelopment) {
  middleware.push(
    createLogger({
      collapsed: true,
      duration: true,
      level: 'info'
    })
  );
}

const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment,
  middleware
});

export default store;

export const persistor = persistStore(store);
