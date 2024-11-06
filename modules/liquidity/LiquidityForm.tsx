import { useEffect } from 'react';

import TokenInputValue from '../../components/data-entry/tokens/tokenInputValue/TokenInputValue';
import {
  selectLiquidityFormTokenACurrency,
  selectLiquidityFormTokenAAmount,
  selectLiquidityFormTokenBCurrency,
  selectLiquidityFormTokenBAmount,
  selectLiquidityFormTokenABalance,
  selectLiquidityFormTokenBBalance
} from '../../redux/forms/liquidity/liquidityFormSelectors';
import {
  updateTokenAActionCreator,
  updateTokenBActionCreator
} from '../../redux/forms/liquidity/liquidityFormActionCreators';
import AddLiquidityConfirmation from './AddLiquidityConfirmation';

const LiquidityForm = () => {
  useEffect(() => {
    fetch('/tokens-pricings.json');
  }, []);

  return (
    <div className="liquidity-form">
      <div className="liquidity-form-content">
        <TokenInputValue
          key="tokenA"
          amountSelector={selectLiquidityFormTokenAAmount}
          currencySelector={selectLiquidityFormTokenACurrency}
          balanceSelector={selectLiquidityFormTokenABalance}
          onChangeAmount={updateTokenAActionCreator}
          onChangeCurrency={updateTokenAActionCreator}
        />
        <div className="align-center">
          <img src="add-icon.svg" />
        </div>
        <TokenInputValue
          key="tokenB"
          amountSelector={selectLiquidityFormTokenBAmount}
          currencySelector={selectLiquidityFormTokenBCurrency}
          balanceSelector={selectLiquidityFormTokenBBalance}
          onChangeAmount={updateTokenBActionCreator}
          onChangeCurrency={updateTokenBActionCreator}
        />
        <AddLiquidityConfirmation />
      </div>
      <style jsx>{`
        .liquidity-form {
          display: flex;
          justify-content: center;
          flex-flow: column nowrap;
        }
        .liquidity-form-content {
          display: grid;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
};

export default LiquidityForm;
