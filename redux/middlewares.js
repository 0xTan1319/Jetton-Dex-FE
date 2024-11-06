import { listsApi } from './lists/listsApi';
import { tonApi } from './ton/tonApi';
import { walletApi } from './wallet/walletApi';

const allMiddlewares = [
  listsApi.middleware,
  tonApi.middleware,
  walletApi.middleware
];

const middlewares = getDefaultMiddleware =>
  getDefaultMiddleware().concat(allMiddlewares);

export default middlewares;
