import {
  selectLiquidityFormTokenACurrency,
  selectLiquidityFormTokenAAmount,
  selectLiquidityFormTokenBCurrency,
  selectLiquidityFormTokenBAmount
} from '../../redux/forms/liquidity/liquidityFormSelectors';
import { selectTokenPricingByCurrency } from '../../redux/lists/tokenListsSelectors';
import ConfirmComponent from '../../components/data-entry/forms/ConfirmComponent';

const AddLiquidityConfirmation = () => (
  <ConfirmComponent
    buttonText="Supply"
    titleToConfirm="You are adding liquidity"
    titleConfirmed="Liquidity added"
    titleSuccess="Your liquidity has been added"
    tokenUnion="/"
    tokenACurrencySelector={selectLiquidityFormTokenACurrency}
    tokenAAmountSelector={selectLiquidityFormTokenAAmount}
    tokenBCurrencySelector={selectLiquidityFormTokenBCurrency}
    tokenBAmountSelector={selectLiquidityFormTokenBAmount}
    tokenAPricingSelector={selectTokenPricingByCurrency}
    tokenBPricingSelector={selectTokenPricingByCurrency}
  />
);

export default AddLiquidityConfirmation;
