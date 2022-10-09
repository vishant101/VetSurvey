import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getQuestions} from '../../Api/Questions';

export interface Question {
  key: number;
  title: string;
  type: 'radio-button' | 'check-box' | 'number-selection' | 'long-form';
  options?: Array<string>;
}

export interface QuestionsState {
  questions: Array<Question>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuestionsState = {
  questions: [],
  status: 'idle',
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await getQuestions;
    return response.data;
  },
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = state.questions.concat(action.payload);
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = questionsSlice.actions;

export default questionsSlice.reducer;

export const selectAllQuestions = state => state.questions.questions;
