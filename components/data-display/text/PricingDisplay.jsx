import { useMemo } from 'react';

const PricingDisplay = ({ value }) => {
  const valueFormatted = useMemo(() => {
    if (!value) {
      return 0;
    }
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 3,
      notation: 'compact'
    });
  }, [value]);
  return <span>{valueFormatted}</span>;
};

export default PricingDisplay;
