import { IconProps } from './types/iconTypes';

export type DiscordProps = {};

export const Discord = (iconProps: IconProps) => {
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
        d="M25 7.5H23.75V17.5C23.75 18.1875 23.1875 18.75 22.5 18.75H7.5V20C7.5 21.375 8.625 22.5 10 22.5H22.5L27.5 27.5V10C27.5 8.625 26.375 7.5 25 7.5ZM21.25 13.75V5C21.25 3.625 20.125 2.5 18.75 2.5H5C3.625 2.5 2.5 3.625 2.5 5V21.25L7.5 16.25H18.75C20.125 16.25 21.25 15.125 21.25 13.75Z"
        fill="#303757"
      />
      <path
        d="M25 7.5H23.75V17.5C23.75 18.1875 23.1875 18.75 22.5 18.75H7.5V20C7.5 21.375 8.625 22.5 10 22.5H22.5L27.5 27.5V10C27.5 8.625 26.375 7.5 25 7.5ZM21.25 13.75V5C21.25 3.625 20.125 2.5 18.75 2.5H5C3.625 2.5 2.5 3.625 2.5 5V21.25L7.5 16.25H18.75C20.125 16.25 21.25 15.125 21.25 13.75Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
};
