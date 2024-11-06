import { useMemo } from 'react';
import { isNumber } from '../../../utils/functions/validations/number';
import classes from './token-pricing.module.scss';

type TokenPricingProps = {
  value: number;
};

const TokenPricing = ({ value = 0 }: TokenPricingProps) => {
  const valueFormatted = useMemo(() => {
    if (!isNumber(value)) {
      return 0;
    }
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 3
    });
  }, [value]);
  return (
    <div className={classes['token-pricing']}>
      <img
        className={classes['token-princing-icon']}
        src="https://ton.org/img/coin_logo_b.svg"
        alt="Toncoins"
      />
      <h6 className={classes['token-princing-value']}>{`${valueFormatted}`}</h6>
    </div>
  );
};

export default TokenPricing;
