import { theme } from './default';

// eslint-disable-next-line import/prefer-default-export
export const dark = {
  ...theme,
  secondaryColor: '#00090c',
  textColor: '#fff',
  secondaryTextColor: '#fff',
  emptyColor: '#5c5c5c',
  underlineColor: '#0088CC',
  bgColor: '#00090c',
  bgDisplayColor: `linear-gradient(
    180deg,
    rgba(0, 9, 12, 1) 100%,
    rgba(48, 55, 87, 1) 100%
  )`,
  bgGradientColor: `linear-gradient( 
    180deg,
    rgba(0, 9, 12, 1) 0%,
    rgba(48, 55, 87, 1) 100%
  )`,
  bgBlur: 'rgba(0, 0, 0, 0.5)',
  greyColor: '#506A92',
  greyMedium: '#8E9BAE',
  selectorsBgColor: '#1e2a3c',

  borderColor: 'rgb(255, 255, 255, 0.2)',
  headerBoxShadow: 'rgb(255, 255, 255, 0.1)',
  breadcrumbColor: '#9b9b9b',
  sidebarTextColor: 'rgb(255, 255, 255, 0.2)',
  sidebarBgColor: '#222222',
  headerShadow: '0px 4px 15px 0 rgba(0,0,0,1)',
  footerShadow: '0px 4px 10px 0 rgba(0,0,0,80%)',
  panelBgColor: '#506A92',
  panelInnerShadow: 'inset 0 0 10px rgb(0, 0, 0, 90%)'
};
