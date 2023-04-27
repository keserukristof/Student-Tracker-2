import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Student } from '../types/student.type'

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getStudents: builder.query<Array<Student>, void>({
      query: () => "students",
    }),
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (newStudent) => ({
        url: "students",
        method: "POST",
        body: newStudent,
      }),
    }),
    getStudent: builder.query<Student, string>({
      query: (id) => `students/${id}`,
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
