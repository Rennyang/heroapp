// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Configurar la store con el rootReducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
