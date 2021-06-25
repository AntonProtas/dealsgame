//libs
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

//slice
import { habitsReducer } from './habits/slice';
import { userReducer } from './user/slice';

const habitsPersistConfig = {
  key: 'habits',
  storage: AsyncStorage,
  whitelist: ['results']
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['balance']
};

export const rootReducer = combineReducers({
  habits: persistReducer(habitsPersistConfig, habitsReducer),
  user: persistReducer(userPersistConfig, userReducer)
});
