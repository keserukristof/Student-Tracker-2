import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Student, StudentState } from '../types/student.type';
import { fetchData, addData } from '../utils/common.api';
import {SERVER_DOMAIN, SERVER_PATH_STUDENTS} from '../constants/api.constants'

const initialState: StudentState = {
  students: [],
  status: 'idle',
  error: null,
};

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await fetchData<Student[]>(`${SERVER_DOMAIN}${SERVER_PATH_STUDENTS}`);
  return response;
});

export const addStudent = createAsyncThunk('students/addStudent', async (newStudent: Student) => {
  const response = await addData<Student>(`${SERVER_DOMAIN}${SERVER_PATH_STUDENTS}`, newStudent);
  return response;
});

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.students = action.payload;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(addStudent.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.status = 'succeeded';
      if (action.payload !== null) {
        state.students.push(action.payload);
      }
    });
    builder.addCase(addStudent.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default studentsSlice.reducer;
