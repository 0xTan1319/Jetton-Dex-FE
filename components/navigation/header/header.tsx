import { MainMenu } from '../menu/mainMenu';
import classes from './header.module.scss';
import { Wallet } from '../../display/wallet';
import ToncoinTokenPricing from '../../display/token/ToncoinTokenPricing';
import { NotificationsFeed } from '../../display/notifications/notificationsFeed';
import { MoreMenu } from '../menu/moreMenu /MoreMenu';
import { WalletMenu } from '../menu/walletMenu/WalletMenu';

export type HeaderProps = {};

export const Header = () => {
  const headerClasses = `header ${classes.header}`;

  return (
    <div className={headerClasses}>
      <div className={classes['header-left-side']}>
        <div className={classes.logo}>
          <img src="/ton-logo-light.svg" alt="Ton logo" />
        </div>
      </div>
      <div className={classes['header-center-side']}>
        <MainMenu />
      </div>
      <div className={classes['header-right-side']}>
        <ToncoinTokenPricing />
        <NotificationsFeed />
        {/* <WalletMenu /> */}
        <Wallet />
        <MoreMenu />
      </div>
    </div>
  );
};
