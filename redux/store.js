import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import middlewares from './middlewares';

const store = configureStore({
  reducer: reducers,
  middleware: middlewares
});

export default store;
