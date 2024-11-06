import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectWalletAddress } from '../../redux/wallet/walletSelectors';

const useWallet = () => {
  const address = useSelector(selectWalletAddress);
  const shortAddress = useMemo(() => {
    const initialWalletAdress = address?.substring(0, 2);
    const endWalletAdress = address?.substring(
      address?.length - 4,
      address?.length + 4
    );
    return `${initialWalletAdress}...${endWalletAdress}`;
  }, [address]);
  const walletMemoized = useMemo(
    () => ({
      address,
      shortAddress
    }),
    [address, shortAddress]
  );
  return walletMemoized;
};

export default useWallet;
