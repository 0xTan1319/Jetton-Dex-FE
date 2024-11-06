/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import classes from './notifications-feed.module.scss';
import { useGetTokenListQuery } from '../../../../redux/lists/listsApi';
import { isArrayWithItems } from '../../../../utils/functions/validations/array';
import { NotificationsFeedItem } from './components/NotificationsFeedItem';

export const NotificationsFeed = () => {
  const [activeNotification, setActiveNotification] = useState(undefined);

  const [isTransition, setIsTransition] = useState(false);
  const [isOnHover, setIsOnHover] = useState(false);
  const { data } = useGetTokenListQuery('');

  const getNextNotification = useCallback(() => {
    if (!isArrayWithItems(data)) {
      return undefined;
    }
    const currentIndex = data.findIndex(
      ({ name }) => name === activeNotification?.name
    );
    const isRestartNotifications = currentIndex > data.length - 1;
    const newIndex = isRestartNotifications ? data[0] : currentIndex + 1;
    const newNotification = data[newIndex];
    const newNotificationAPY = `${(Math.random() * (150 - 40) + 40).toFixed(
      2
    )}%`;
    const newNotificationFormatted = {
      ...newNotification,
      image: newNotification?.logoURI ?? '/coin-logo-default.svg',
      value: newNotificationAPY,
      title: newNotification?.symbol
    };
    return newNotificationFormatted;
  }, [activeNotification, data]);

  useEffect(() => {
    if (activeNotification === undefined) {
      const defaultNotification = getNextNotification();
      setActiveNotification(defaultNotification);
    }
  }, [activeNotification, getNextNotification]);

  useEffect(() => {
    const getNewNotification = () => {
      const newNotification = getNextNotification();
      setIsTransition(true);
      setTimeout(() => {
        setIsTransition(false);
      }, 500);
      setActiveNotification(newNotification);
    };
    const newNotificationTrigger = setInterval(getNewNotification, 4000);
    if (isOnHover) {
      clearInterval(newNotificationTrigger);
    }
    return () => {
      clearInterval(newNotificationTrigger);
    };
  }, [getNextNotification, isOnHover]);

  const onHover = () => {
    setIsOnHover(true);
  };
  const onHoverStop = () => {
    setIsOnHover(false);
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onHoverStop}
      className={classes['notification-feed-wrapper']}>
      <div className={classes['notification-feed']}>
        <AnimatePresence>
          {!isTransition && <NotificationsFeedItem {...activeNotification} link="/liquidity" />}
        </AnimatePresence>
      </div>
    </div>
  );
};
