import store from './store';

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = any;
export type AppDispatch = typeof store.dispatch;
