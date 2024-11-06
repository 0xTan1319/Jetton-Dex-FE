import { Menu } from 'antd';
import {
  MdContentCopy as CopyIcon,
  MdCheck as CopiedIcon
} from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Text } from '../../../../typography';
import { WalletMenuItem } from './WalletMenuItem';
import useWallet from '../../../../hooks/useWallet';
import classes from './wallet-menu.module.scss';

const walletMenuItems = [
  {
    menuId: 'wallet',
    label: 'wallet',
    href: 'https://ton.sh/address/EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
    icon: 'https://ton.org/img/coin_logo_b.svg',
    alt: 'Ton wallet'
  },
  {
    menuId: 'nfts',
    label: 'NFTs',
    href: 'https://ton.diamonds/',
    icon: '/toncoin-nfts.svg',
    alt: 'ton-diamonds-nfts'
  },
  {
    menuId: 'disconnectWallet',
    label: 'Disconnect',
    icon: '/logout-icon.svg',
    alt: 'Disconnect wallet'
  }
];

const WalletMenu = () => {
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
      {walletMenuItems.map(({ menuId, label, href, icon }) => (
        <WalletMenuItem key={menuId} label={label} href={href} icon={icon} />
      ))}
    </Menu>
  );
};

export default WalletMenu;
