import { WalletMenu } from '../../navigation/menu/walletMenu/WalletMenu';
import ConnectWallet from './components/connectWallet/ConnectWallet';
import { selectIsWalletConnected } from '../../../redux/wallet/walletSelectors';
import { useSelector } from '../../hooks/useRedux';

export const Wallet = () => {
  const isWalletConnected = useSelector(selectIsWalletConnected);
  return isWalletConnected ? <WalletMenu /> : <ConnectWallet />;
};
