import React from 'react';
import { Footer } from '../../navigation/footer/Footer';
import { Header } from '../../navigation/header';
import classes from './page.module.scss';

export type PageProps = {
  children?: React.ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
  className?: string;
};

export const Page = (pageProps: PageProps) => {
  const {
    children,
    hasHeader = true,
    hasFooter = true,
    className = ''
  } = pageProps;
  return (
    <div className={`page page-content ${className}`}>
      <>
        {hasHeader && <Header />}
        <div className={classes.content}>{children}</div>
        {hasFooter && <Footer />}
      </>
    </div>
  );
};
