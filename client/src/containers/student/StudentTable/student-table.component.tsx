import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../../../slices/student.slice';
import { AppDispatch, RootState } from '../../../store';

import { TableBase, TableBaseColumn } from "../../../components/common/TableBase/table-base.component";

export const StudentTable: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const students = useSelector((state: RootState) => state.students.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const columns: TableBaseColumn[] = [
    { key: "id", header: "ID" },
    { key: "firstName", header: "First Name" },
    { key: "lastName", header: "Last Name" },
    { key: "age", header: "Age" },
  ];

  return <TableBase columns={columns} data={students} />;
};
