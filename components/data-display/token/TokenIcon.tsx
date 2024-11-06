import { useMemo, useRef } from 'react';
import { useGetTokenListQuery } from '../../../redux/lists/listsApi';
import { isString } from '../../../utils/functions/validations/string';
import classes from '../../display/notifications/notificationsFeed/notifications-feed.module.scss';

type TokenIconProps = {
  symbol?: string;
  src?: string;
  className?: string;
};

const TokenIcon = (tokenIconProps: TokenIconProps) => {
  const { symbol, src, className } = tokenIconProps;
  const notificationFeedItemAvatarRef = useRef(null);
  const { data } = useGetTokenListQuery('token');
  const url = useMemo(() => {
    if (src) {
      return src;
    }
    const tokenLogoUri = data?.find(token => token?.symbol === symbol)?.logoURI;
    if (isString(tokenLogoUri)) {
      return tokenLogoUri;
    }
    return '/coin-logo-default.svg';
  }, [data, src, symbol]);

  const handleOnErrorAvatar = () => {
    notificationFeedItemAvatarRef.current.src = '/coin-logo-default.svg';
  };

  return (
    <img
      ref={notificationFeedItemAvatarRef}
      className={`${className} ${classes['notification-feed-item-avatar']}`}
      src={url}
      onError={handleOnErrorAvatar}
      alt="token icon"
    />
  );
};

export default TokenIcon;
