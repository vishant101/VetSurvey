import {configureStore} from '@reduxjs/toolkit';

import questionsReducer from '../Redux/Questions';

export default configureStore({
  reducer: {questionsState: questionsReducer},
});
