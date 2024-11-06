import { IconProps } from './types/iconTypes';

export type HelpCenterProps = {};

export const HelpCenter = (iconProps: IconProps) => {
  const { color, className = '' } = iconProps;
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75ZM15.0125 22.5C14.1375 22.5 13.4375 21.8 13.4375 20.925C13.4375 20.0375 14.1375 19.3625 15.0125 19.3625C15.9 19.3625 16.575 20.0375 16.575 20.925C16.5625 21.7875 15.9 22.5 15.0125 22.5ZM18.775 13.25C17.825 14.6375 16.925 15.075 16.4375 15.9625C16.3125 16.1875 16.2375 16.3625 16.2 16.75C16.1375 17.3125 15.6375 17.725 15.075 17.725H15C14.35 17.725 13.8375 17.175 13.9 16.525C13.9375 16.1 14.0375 15.6625 14.275 15.2375C14.8875 14.15 16.05 13.5 16.725 12.5375C17.4375 11.525 17.0375 9.625 15.0125 9.625C14.125 9.625 13.5375 10.075 13.175 10.6125C12.8625 11.0625 12.3125 11.275 11.8 11.0625C11.1375 10.8 10.9 10 11.3 9.425C12.0625 8.3125 13.3375 7.5 14.9875 7.5C16.8375 7.5 18.1 8.3375 18.75 9.4C19.3 10.3 19.625 11.9875 18.775 13.25Z"
        fill="#303757"
      />
      <path
        d="M23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75ZM15.0125 22.5C14.1375 22.5 13.4375 21.8 13.4375 20.925C13.4375 20.0375 14.1375 19.3625 15.0125 19.3625C15.9 19.3625 16.575 20.0375 16.575 20.925C16.5625 21.7875 15.9 22.5 15.0125 22.5ZM18.775 13.25C17.825 14.6375 16.925 15.075 16.4375 15.9625C16.3125 16.1875 16.2375 16.3625 16.2 16.75C16.1375 17.3125 15.6375 17.725 15.075 17.725H15C14.35 17.725 13.8375 17.175 13.9 16.525C13.9375 16.1 14.0375 15.6625 14.275 15.2375C14.8875 14.15 16.05 13.5 16.725 12.5375C17.4375 11.525 17.0375 9.625 15.0125 9.625C14.125 9.625 13.5375 10.075 13.175 10.6125C12.8625 11.0625 12.3125 11.275 11.8 11.0625C11.1375 10.8 10.9 10 11.3 9.425C12.0625 8.3125 13.3375 7.5 14.9875 7.5C16.8375 7.5 18.1 8.3375 18.75 9.4C19.3 10.3 19.625 11.9875 18.775 13.25Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
};
