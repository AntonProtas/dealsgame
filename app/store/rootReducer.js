//libs
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

//slice
import { habitsReducer } from './habits/slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['results']
};

export const rootReducer = combineReducers({
  habits: persistReducer(persistConfig, habitsReducer)
});
