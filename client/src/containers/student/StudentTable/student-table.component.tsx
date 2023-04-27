import { FunctionComponent } from 'react';

import { TableBase, TableBaseColumn } from "../../../components/common/TableBase/table-base.component";
import { useGetStudentsQuery, useDeleteStudentMutation } from '../../../apis/student.api';

export const StudentTable: FunctionComponent = () => {
  const { data, refetch } = useGetStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  const handleDeleteStudent = async (studentId: string) => {
    await deleteStudent(studentId);
    refetch();
  };

  const columns: TableBaseColumn[] = [
    { key: "firstName", header: "First Name" },
    { key: "lastName", header: "Last Name" },
    { key: "age", header: "Age" },
  ];

  return <TableBase columns={columns} data={data || []} onDeleteStudent={handleDeleteStudent}/>;
};
