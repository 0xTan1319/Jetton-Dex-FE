import { selectIsWalletConnected } from '../../../../../redux/wallet/walletSelectors';
import { useSelector } from '../../../../hooks/useRedux';
import ConnectWallet from '../../components/connectWallet/ConnectWallet';

type Props = { children: any };

const ButtonWalletWrapper = ({ children }: Props) => {
  const isWalletConnected = useSelector(selectIsWalletConnected);
  return isWalletConnected ? children : <ConnectWallet />;
};

export default ButtonWalletWrapper;
