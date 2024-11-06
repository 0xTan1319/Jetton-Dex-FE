import { FooterMenu } from '../menu/footerMenu/FooterMenu';
import classes from './footer.module.scss';

export type FooterProps = {};

export const Footer = () => (
  <div className={classes.footer}>
    <div className={classes['footer-content']}>
      <div className={classes['footer-center-side']}>
        <FooterMenu />
      </div>
    </div>
  </div>
);
