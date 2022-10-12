import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getQuestions} from '../../Api/Questions';
import {RootState} from '../../Store/types';

export interface Question {
  key: number;
  title: string;
  type: 'radio-button' | 'check-box' | 'number-selection' | 'long-form';
  options?: Array<string>;
}

export interface QuestionsState {
  questions: Array<Question>;
  answers: Answers;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface Answers {
  [questionKey: number]: Answer;
}

export interface Answer {
  questionKey: number;
  answer: string | Array<string>;
}

const initialState: QuestionsState = {
  questions: [],
  answers: {},
  status: 'idle',
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await getQuestions;
    return response;
  },
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    updateAnswer: (state: QuestionsState, action: PayloadAction<Answer>) => {
      const answer = action.payload;
      state.answers = {...state.answers, [answer.questionKey]: answer};
    },
    resetAnswers: (state: QuestionsState) => {
      state.answers = {};
    },
  },
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
        state.error = action.error.message || '';
      });
  },
});

export const {updateAnswer, resetAnswers} = questionsSlice.actions;

export default questionsSlice.reducer;

export const selectAllQuestions = (state: RootState) =>
  state.questionsState.questions;
