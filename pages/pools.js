import PoolsList from '../modules/pools/PoolsList';
import classes from '../styles/pages/pools.module.scss';

const Pools = () => (
  <div className={classes.pools}>
    <PoolsList />
  </div>
);

export default Pools;
