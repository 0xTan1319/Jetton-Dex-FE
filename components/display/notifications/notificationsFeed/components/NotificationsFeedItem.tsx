import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import classes from '../notifications-feed.module.scss';

export type NotificationsFeedItemProps = {
  image: string;
  title: string;
  link: string;
  value: any;
};

export const NotificationsFeedItem = (
  activeNotification: NotificationsFeedItemProps
) => {
  const { image, title, value, link = '' } = activeNotification;
  const notificationFeedItemAvatarRef = useRef();

  const handleOnErrorAvatar = () => {
    notificationFeedItemAvatarRef.current.src = '/coin-logo-default.svg';
  };

  return (
    <Link href={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className={classes['notification-feed-item']}>
        {image && (
          <img
            ref={notificationFeedItemAvatarRef}
            className={classes['notification-feed-item-avatar']}
            src={image}
            alt={title}
            onError={handleOnErrorAvatar}
          />
        )}
        {title && (
          <h6 className={classes['notification-feed-item-message']}>{title}</h6>
        )}
        {value && (
          <div className={classes['notification-feed-item-value']}>
            <div className={classes['notification-feed-item-value-title']}>
              APY
            </div>
            <div>{value}</div>
          </div>
        )}
      </motion.div>
    </Link>
  );
};
