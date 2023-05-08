import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Student } from '../types/student.type'
import { SERVER_DOMAIN } from '../constants/api.constants'

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_DOMAIN }),
  endpoints: (builder) => ({
    getStudents: builder.query<Array<Student>, void>({
      query: () => "students",
    }),
    getStudent: builder.query<Student, string>({
      query: (id) => `students/${id}`,
    }),
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (newStudent) => ({
        url: "students",
        method: "POST",
        body: newStudent,
      }),
    }),
    updateStudent: builder.mutation<Student, { id: string; changes: Partial<Student> }>({
      query: ({ id, changes }) => ({
        url: `students/${id}`,
        method: "PUT",
        body: changes,
      }),
    }),
    deleteStudent: builder.mutation<{ id: string }, string>({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useCreateStudentMutation,
  useGetStudentQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
