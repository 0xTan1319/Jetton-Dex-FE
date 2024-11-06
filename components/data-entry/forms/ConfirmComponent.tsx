import { useMemo, useState } from 'react';
import { Modal, Result } from 'antd';
import Link from 'next/link';
import { Card } from '../../data-display/card';
import TokenIcon from '../../data-display/token/TokenIcon';
import { Button } from '../../button';
import { timeout } from '../../../redux/lists/fakerPoolsApi';
import { useSelector } from '../../hooks/useRedux';
import RowConfirm from '../../data-display/text/RowConfirm';
import ButtonWalletWrapper from '../../display/wallet/components/buttonWalletWrapper/ButtonWalletWrapper';

type Props = {
  tokenACurrencySelector: any;
  tokenAAmountSelector: any;
  tokenBCurrencySelector: any;
  tokenBAmountSelector: any;
  tokenAPricingSelector: any;
  tokenBPricingSelector: any;
  buttonText: string;
  titleSuccess: string;
  titleToConfirm: string;
  titleConfirmed: string;
  tokenUnion: string;
};

const ConfirmComponent = ({
  tokenACurrencySelector,
  tokenAAmountSelector,
  tokenBCurrencySelector,
  tokenBAmountSelector,
  tokenAPricingSelector,
  tokenBPricingSelector,
  buttonText,
  titleSuccess,
  titleToConfirm,
  titleConfirmed,
  tokenUnion
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirmed, setIsVisibleConfirmed] = useState(false);
  const [isLoading, setIsLoadingAddLiquidity] = useState(false);

  const onClickSupply = () => {
    setIsVisible(true);
  };
  const tokenACurrency = useSelector(tokenACurrencySelector);
  const tokenAAmount = useSelector(tokenAAmountSelector);
  const tokenBCurrency = useSelector(tokenBCurrencySelector);
  const tokenBAmount = useSelector(tokenBAmountSelector);
  const tokenAPricing = useSelector(tokenAPricingSelector, tokenACurrency);
  const tokenBPricing = useSelector(tokenBPricingSelector, tokenBCurrency);
  const onCancelAddLiquidity = () => {
    if (isLoading) {
      return;
    }
    setIsVisible(false);
    setIsVisibleConfirmed(false);
  };
  const onConfirm = async () => {
    setIsLoadingAddLiquidity(true);
    await timeout(2500);
    setIsVisibleConfirmed(true);
    setIsLoadingAddLiquidity(false);
  };
  const isDisabledAddLiquidity = useMemo(() => {
    if (!tokenACurrency) {
      return true;
    }
    if (!tokenAAmount) {
      return true;
    }
    if (!(tokenAAmount > 0)) {
      return true;
    }
    if (!tokenBCurrency) {
      return true;
    }
    if (!tokenBAmount) {
      return true;
    }
    if (!(tokenBAmount > 0)) {
      return true;
    }
    return false;
  }, [tokenAAmount, tokenACurrency, tokenBAmount, tokenBCurrency]);
  return (
    <>
      <ButtonWalletWrapper>
        <Button
          type="primary"
          onClick={onClickSupply}
          isDisabled={isDisabledAddLiquidity}
          size="large">
          {buttonText}
        </Button>
      </ButtonWalletWrapper>
      <Modal
        title={<h4>{isVisibleConfirmed ? titleConfirmed : titleToConfirm}</h4>}
        visible={isVisible}
        onCancel={onCancelAddLiquidity}
        footer={false}
        destroyOnClose>
        <div className="add-liquidity-confirm">
          {isVisibleConfirmed ? (
            <>
              <Result status="success" title={titleSuccess} />
              <Link href="/pools">
                <Button type="primary">Go to the pools</Button>
              </Link>
            </>
          ) : (
            <>
              <div className="add-liquidity-confirm-tokens">
                <TokenIcon symbol={tokenACurrency} />
                <h4 className="primary-color">
                  {tokenACurrency} {tokenUnion} {tokenBCurrency}
                </h4>
                <TokenIcon symbol={tokenBCurrency} />
              </div>
              <Card>
                <div>
                  <RowConfirm
                    left={`${tokenACurrency} Deposited`}
                    right={tokenAAmount}
                  />
                  <RowConfirm
                    left={`${tokenACurrency} Deposited`}
                    right={tokenBAmount}
                  />
                  <RowConfirm left="Share of Pool:" right="100%" />
                  <RowConfirm
                    left="Rates:"
                    right={`${tokenACurrency} = ${tokenAPricing} ${tokenBCurrency}`}
                    hasRightBorderTop
                  />
                  <RowConfirm
                    right={`${tokenBCurrency} = ${tokenBPricing} ${tokenACurrency}`}
                  />
                </div>
              </Card>
              <Button type="primary" onClick={onConfirm} isLoading={isLoading}>
                {buttonText}
              </Button>
            </>
          )}
        </div>
      </Modal>
      <style jsx>
        {`
          .add-liquidity-confirm {
            display: grid;
            gap: 1rem;
          }
          .add-liquidity-confirm-tokens {
            display: flex;
            justify-content: center;
            gap: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default ConfirmComponent;
