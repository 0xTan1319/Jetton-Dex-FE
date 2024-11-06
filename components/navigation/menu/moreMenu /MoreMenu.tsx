// import { MoreIcon } from '../../../icons';

import { More } from '../../../icons';
import { Dropdown } from '../../dropdown';
import MoreMenuComp from './components/MoreMenuComp';

export type MoreMenuProps = {};

export const MoreMenu = () => (
  <Dropdown
    overlay={MoreMenuComp}
    placement="bottomRight"
    trigger={['click', 'hover']}>
    <div className="align-center cursor-pointer">
      <More />
    </div>
  </Dropdown>
);
