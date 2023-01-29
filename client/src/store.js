import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginSlice';
import registerReducer from './reducers/registerSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
