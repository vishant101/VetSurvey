import {configureStore} from '@reduxjs/toolkit';

import questionsReducer from '../Redux/Questions';

export default configureStore({
  reducer: {questionsState: questionsReducer},
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      immutableCheck: false,
    });
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
  devTools: process.env.NODE_ENV !== 'production',
});
