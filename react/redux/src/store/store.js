import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CounterSlice from '../features/counter/counterSlice';

const rootReducer = combineReducers({
    counter: CounterSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;