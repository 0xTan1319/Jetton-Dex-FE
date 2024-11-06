import { useState } from 'react';
import { Alert } from 'antd';
import { useSelector } from '../../components/hooks/useRedux';
import {
  selectExchangeFormTokenACurrency,
  selectExchangeFormTokenBAmount,
  selectExchangeFormTokenBCurrency
} from '../../redux/forms/exchange/exchangeFormSelectors';
import RowConfirm from '../../components/data-display/text/RowConfirm';

const SwapPreview = () => {
  const [canViewDetailed, setCanViewDetailed] = useState(false);
  const tokenACurrency = useSelector(selectExchangeFormTokenACurrency);
  const tokenBAmount = useSelector(selectExchangeFormTokenBAmount);
  const tokenBCurrency = useSelector(selectExchangeFormTokenBCurrency);

  return (
    <>
      {tokenACurrency && tokenBCurrency && (
        <>
          <Alert
            message={`1 ${tokenACurrency} = ${tokenBCurrency} ($1.557)`}
            type="info"
            className="cursor-pointer"
            showIcon
            onClick={() => setCanViewDetailed(prevState => !prevState)}
          />
          {canViewDetailed && (
            <div className="swap-preview-detailed">
              <RowConfirm
                left="Expected Output"
                right={`${tokenBAmount} ${tokenBCurrency}`}
              />
              <RowConfirm left="Price Impact" right="47 %" />
              <RowConfirm
                left="Minimum received after slippage (0.50%)"
                right={`${tokenBAmount} ${tokenBCurrency}`}
                hasRightBorderTop
              />
              <RowConfirm left="Price Impact" right="$127.93" />
            </div>
          )}
        </>
      )}

      <style jsx>
        {`
          .swap-preview {
            border-radius: var(--border-radius-base) !important;
          }
          .swap-preview-detailed {
            border: 1px solid var(--grey-color);
            border-radius: var(--border-radius-base);
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default SwapPreview;
