import { IconProps } from './types/iconTypes';

export type LogoutProps = {};

export const Logout = (iconProps: IconProps) => {
  const { color, className = '' } = iconProps;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 0 30 30"
      width="30px"
      fill={color ?? 'currentColor'}>
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
      </g>
    </svg>
  );
};
