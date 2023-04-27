import React, { FunctionComponent } from "react";
import "./table-base.component.scss";
import { Button } from "../../app-shell/Button/button.component";

export interface TableBaseColumn {
  key: string;
  header: string;
}

export interface TableBaseProps {
  columns: TableBaseColumn[];
  data: Record<string, any>[];
  onDeleteStudent?: (studentId: string) => void;
  deletableRows?: boolean;
}

export const TableBase: FunctionComponent<TableBaseProps> = ({
  columns,
  data,
  onDeleteStudent,
  deletableRows = true,
}) => {
  return (
    <table className="configurable-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
          {deletableRows && <th key={"delelteButton"}></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={`${rowIndex}-${column.key}`}>{row[column.key]}</td>
            ))}
            {deletableRows && (
              <td className="delete-btn-container">
                <Button label="X" variant="warning" onClick={() => onDeleteStudent && onDeleteStudent(row.id)}/>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};