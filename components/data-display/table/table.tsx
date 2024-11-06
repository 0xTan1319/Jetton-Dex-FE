/* eslint-disable react/require-default-props */
import { Table as TableAntd } from 'antd';

export type TableProps = {
  /**
   * drawer body content.
   */
  className?: string;
  dataSource?: any[];
  columns?: [];
  title?: any;
  onChange?: any;
};

export const Table = ({
  className = '',
  dataSource = [],
  columns = [],
  title,
  onChange
}: TableProps) => (
  <TableAntd
    className={`table ${className}`}
    dataSource={dataSource}
    columns={columns}
    title={title}
    onChange={onChange}
  />
);
