import { Student } from '../types/student.type';
import { fetchData } from '../api/common.api';
import { CLIENT_DOMAIN, CLIENT_PATH_STUDENTS } from '../constants/client.constants';

export const fetchStudents = async (): Promise<Student[]> => {
  return await fetchData<Student>(`${CLIENT_DOMAIN}${CLIENT_PATH_STUDENTS}`);
};