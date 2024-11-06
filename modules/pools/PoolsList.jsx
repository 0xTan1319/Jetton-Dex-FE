import { useMemo, useState } from 'react';
import { List, Skeleton } from 'antd';
import { useGetPoolsListQuery } from '../../redux/lists/listsApi';
import TokenIcon from '../../components/data-display/token/TokenIcon';
import PricingDisplay from '../../components/data-display/text/PricingDisplay';
import { Button } from '../../components/button';
import PoolsFilters from './PoolsFilters';
import classes from './pools-list.module.scss';

const ListColumn = ({ title, text }) => (
  <div className={classes['pool-list-column']}>
    <div className={classes['pool-list-colum-title']}>{title}</div>
    <div className={classes['pool-list-colum-text']}>{text}</div>
  </div>
);

const PoolsList = () => {
  const [totalPools, setTotalPools] = useState(0);
  const queryPayload = useMemo(
    () => ({
      name: 'pools',
      totalPools
    }),
    [totalPools]
  );
  const { data, isLoading, isFetching } = useGetPoolsListQuery(queryPayload);
  const onLoadMore = () => {
    setTotalPools(data?.length ?? 0);
  };

  return (
    <div className={classes['pool-list']}>
      <PoolsFilters />
      <List
        loading={isLoading}
        loadMore={
          <div className={classes['load-more']}>
            <Button onClick={onLoadMore} isLoading={isFetching}>
              loading more
            </Button>
          </div>
        }
        dataSource={data}
        style={{ width: '90%' }}
        renderItem={pool => (
          <Skeleton avatar title={false} loading={isLoading} active>
            <div className={classes['pool-list-item']}>
              <div className={classes['pool-list-item-tokens']}>
                <TokenIcon
                  symbol={pool?.data?.token0?.symbol}
                  style={{ marginRight: '-6px', zIndex: 1 }}
                  className={classes['pool-list-item-token-icon']}
                />
                <TokenIcon
                  className={classes['pool-list-item-token-icon']}
                  symbol={pool?.data?.token1?.symbol}
                />
              </div>
              <div className={classes['pool-list-item-token-title']}>
                {pool?.data?.token0?.symbol} / {pool?.data?.token1?.symbol}
              </div>
              <ListColumn
                title="Volumne 24H"
                text={<PricingDisplay value={pool?.data?.volumeUSD} />}
              />
              <ListColumn
                title="Volume 7D"
                text={<PricingDisplay value={pool?.data?.volumeUSDWeek} />}
              />
              <ListColumn
                title="APY"
                text={pool?.data?.tvlUSDChange?.toLocaleString('en-US', {
                  style: 'percent'
                })}
              />
              <ListColumn
                title="Liquidity"
                text={
                  <PricingDisplay value={pool?.data?.liquidity / 100000000} />
                }
              />
            </div>
          </Skeleton>
        )}
      />
    </div>
  );
};

export default PoolsList;
