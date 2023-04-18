import React, { FunctionComponent } from "react";
import "./ConfigurableTable.scss";

export interface TableColumn {
  key: string;
  header: string;
}

export interface ConfigurableTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

export const ConfigurableTable: FunctionComponent<ConfigurableTableProps> = ({
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