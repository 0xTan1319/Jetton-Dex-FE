import { Avatar as AvatarAntd, Skeleton as skeletonAntd } from 'antd';

export type AvatarProps = {
  /**
   * This attribute defines the alternative text describing the image
   */
  alt?: string;
  className?: string;
  isLoading?: boolean;
  /**
   * The size of the avatar
   */
  size?: number | 'large' | 'small' | 'default';
  /**
   * The address of the image for an image avatar or image element
   */
  src: string;
};

const { Avatar: AvatarSkeletonAntd } = skeletonAntd;

export const Avatar = ({
  alt,
  className = '',
  isLoading = false,
  size = 'default',
  src
}: AvatarProps) => {
  return isLoading ? (
    <AvatarSkeletonAntd active size={size} />
  ) : (
    <AvatarAntd
      className={`avatar ${className}`}
      size={size}
      alt={alt}
      src={src}
    />
  );
};
