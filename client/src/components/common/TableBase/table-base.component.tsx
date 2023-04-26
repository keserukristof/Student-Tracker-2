import React, { FunctionComponent } from "react";
import "./table-base.component.scss";

export interface TableBaseColumn {
  key: string;
  header: string;
}

export interface TableBaseProps {
  columns: TableBaseColumn[];
  data: Record<string, any>[];
}

export const TableBase: FunctionComponent<TableBaseProps> = ({
  columns,
  data,
}) => {
  return (
    <table className="configurable-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={`${rowIndex}-${column.key}`}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};