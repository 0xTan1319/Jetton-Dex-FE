import { Typography } from 'antd';

const { Text: TextAntd, Title: TitleAntd } = Typography;

export type TypographyEditableProps = {
  icon?: React.ReactNode;
  tooltip?: boolean | React.ReactNode;
  editing?: boolean;
  maxLength?: number;
  autoSize?: boolean | { minRows: number; maxRows: number };
  onStart?: () => void;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  onEnd?: () => void;
};

export type TextProps = {
  /**
   * a text to be rendered in the component.
   */
  children?: React.ReactNode;
  className?: string;
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  isCode?: boolean;
  editable?: TypographyEditableProps;
  ellipsis?: boolean;
  keyboard?: boolean;
  copyable?: any;
};

export const Text = ({
  className = '',
  children,
  type,
  isCode,
  editable,
  ellipsis,
  keyboard,
  copyable
}: TextProps) => (
  <TextAntd
    className={`typography ${className}`}
    editable={editable}
    type={type}
    code={isCode}
    keyboard={keyboard}
    ellipsis={ellipsis}
    copyable={copyable}>
    {children}
  </TextAntd>
);

export type TitleProps = {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  editable?: TypographyEditableProps;
};

export const Title = ({
  children,
  level,
  className = '',
  editable
}: TitleProps) => (
  <TitleAntd
    editable={editable}
    className={`typography ${className}`}
    level={level}>
    {children}
  </TitleAntd>
);
