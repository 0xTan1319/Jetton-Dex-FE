import { Exchange, Liquidity, Pool } from '../components/icons';

export const routes = {
  exchange: {
    id: 'exchange',
    path: '/exchange',
    label: 'Exchange',
    Icon: Exchange
  },
  pools: {
    id: 'pools',
    path: '/pools',
    label: 'Pools',
    Icon: Pool
  },
  liquidity: {
    id: 'liquidity',
    path: '/liquidity',
    label: 'Liquidity',
    Icon: Liquidity
  }
};

export const mainMenuRoutes = ['exchange', 'pools', 'liquidity'];
export const footerMenuRoutes = ['exchange', 'pools', 'liquidity'];
