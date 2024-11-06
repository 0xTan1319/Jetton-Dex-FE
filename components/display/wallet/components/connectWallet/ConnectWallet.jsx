import { useSelector } from '../../../../hooks/useRedux';
import { useLazyConnectWalletQuery } from '../../../../../redux/wallet/walletApi';
import { selectIsLoadingConnectingWallet } from '../../../../../redux/wallet/walletSelectors';
import { Button } from '../../../../button';

const ConnectWallet = () => {
  const isLoading = useSelector(selectIsLoadingConnectingWallet);
  const [trigger] = useLazyConnectWalletQuery('wallet');
  const onClickConnectWallet = () => {
    trigger();
  };
  return (
    <Button
      type="primary"
      size="middle"
      onClick={onClickConnectWallet}
      isLoading={isLoading}>
      Connect wallet
    </Button>
  );
};

export default ConnectWallet;
