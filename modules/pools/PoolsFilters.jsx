import { Input, Radio, Select, Switch } from 'antd';
import CreatePool from './createPool/CreatePool';
import { GridView, ListView } from '../../components/icons';
import classes from './pools-list.module.scss';

const PoolsFilters = () => (
  <div className={classes['pools-filters']}>
    <div className={classes['pools-filters-view']}>
      <GridView color="var(--grey-color)" className="cursor-pointer" />
      <ListView color="var(--primary-color)" className="cursor-pointer" />
    </div>
    <div className={classes['pools-filters-stacked-switch']}>
      <Switch />
      <div>Stacked only</div>
    </div>
    <div className={classes['pools-filters-live']}>
      <Radio.Group
        options={['Live', 'Finished']}
        defaultValue="Live"
        optionType="button"
        buttonStyle="solid"
      />
    </div>
    <div className={classes['pools-filters-sort-select']}>
      <Select
        style={{ width: '200px' }}
        placeholder="Sort by"
        options={[
          { value: 'default', label: 'Default' },
          { value: 'apy', label: 'APY' },
          { value: 'liquidity', label: 'Liquidity' }
        ]}
      />
    </div>
    <div className={classes['pools-filters-search']}>
      <Input.Search />
    </div>
    <div className={classes['pools-filters-create-pool-btn']}>
      <CreatePool />
    </div>
  </div>
);

export default PoolsFilters;
