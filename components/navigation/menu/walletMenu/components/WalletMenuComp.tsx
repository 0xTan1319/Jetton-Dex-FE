import { Menu } from 'antd';
import {
  MdContentCopy as CopyIcon,
  MdCheck as CopiedIcon
} from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Logout, Toncoin, ToncoinNfts } from '../../../../icons';
import classes from './wallet-menu.module.scss';
import { WalletMenuItem } from './WalletMenuItem';
import { Text } from '../../../../typography';
import useWallet from '../../../../hooks/useWallet';
import { resetWalletActionCreator } from '../../../../../redux/wallet/walletActionCreators';

const walletMenuItems = [
  {
    id: 'wallet',
    label: 'Wallet',
    href: 'https://ton.sh/address/',
    Icon: Toncoin,
    iconProps: { color: 'var(--primary-color)' },
    alt: 'Toncoin'
  },
  {
    id: 'nfts',
    label: 'NFTs',
    href: 'https://ton.diamonds/',
    Icon: ToncoinNfts,
    iconProps: { color: 'var(--primary-color)' },
    alt: 'Toncoin diamonds nfts'
  },
  {
    id: 'disconnectWallet',
    label: 'Disconnect',
    onClick: resetWalletActionCreator,
    Icon: Logout,
    iconProps: { color: 'var(--primary-color)' },
    alt: 'Disconnect wallet'
  }
];

const WalletMenuComp = () => {
  const { address, shortAddress } = useWallet();
  return (
    <Menu>
      <div className="align-center mt-05 mb-05">
        <Text
          copyable={{
            text: address,
            icon: [
              <IconContext.Provider
                key="copy-icon"
                value={{ className: classes['wallet-menu__copy-icon'] }}>
                <CopyIcon />
              </IconContext.Provider>,
              <IconContext.Provider
                key="copied-icon"
                value={{ className: classes['wallet-menu__copied-icon'] }}>
                <CopiedIcon />
              </IconContext.Provider>
            ],
            tooltips: ['Copy address', 'copied!!']
          }}
          isCode>
          {shortAddress}
        </Text>
      </div>
      {walletMenuItems.map(({ id, label, href, Icon, iconProps, onClick }) => (
        <WalletMenuItem
          key={id}
          id={id}
          label={label}
          href={id === 'wallet' ? href + address : href}
          Icon={Icon}
          iconProps={iconProps}
          onClick={onClick}
        />
      ))}
    </Menu>
  );
};

export default WalletMenuComp;
