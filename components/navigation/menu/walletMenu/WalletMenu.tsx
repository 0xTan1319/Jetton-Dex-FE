import { Wallet } from '../../../icons';
import { Dropdown } from '../../dropdown';
import WalletMenuComp from './components/WalletMenuComp';

export type WalletMenuProps = {};

export const WalletMenu = () => (
  <Dropdown
    overlay={<WalletMenuComp />}
    placement="bottomRight"
    trigger={['click', 'hover']}>
    <div className="align-center cursor-pointer">
      <Wallet color="var(--primary-color)" />
    </div>
  </Dropdown>
);
