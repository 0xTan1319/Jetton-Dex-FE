import { IconProps } from './types/iconTypes';

export type AboutProps = {};

export const About = (iconProps: IconProps) => {
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
        d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 21.25C14.3125 21.25 13.75 20.6875 13.75 20V15C13.75 14.3125 14.3125 13.75 15 13.75C15.6875 13.75 16.25 14.3125 16.25 15V20C16.25 20.6875 15.6875 21.25 15 21.25ZM16.25 11.25H13.75V8.75H16.25V11.25Z"
        fill="#303757"
      />
      <path
        d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 21.25C14.3125 21.25 13.75 20.6875 13.75 20V15C13.75 14.3125 14.3125 13.75 15 13.75C15.6875 13.75 16.25 14.3125 16.25 15V20C16.25 20.6875 15.6875 21.25 15 21.25ZM16.25 11.25H13.75V8.75H16.25V11.25Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
};
