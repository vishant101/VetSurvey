import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestions} from '../../../Redux/Questions';
import {RootState} from '../../../Store/types';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const questionsStatus = useSelector(
    (state: RootState) => state.questionsState.status,
  );

  useEffect(() => {
    if (questionsStatus === 'idle') {
      dispatch(fetchQuestions());
    }
  }, [questionsStatus, dispatch]);

  const renderSpinner = () => <ActivityIndicator size={'large'} />;

  const renderError = () => (
    <Text>Something went wrong, please try again later</Text>
  );

  const renderHome = () => <View />;

  const render = () => {
    switch (questionsStatus) {
      case 'succeeded':
        return renderHome();
      case 'failed':
        return renderError();
      case 'idle':
      case 'loading':
      default:
        return renderSpinner();
    }
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {render()}
    </View>
  );
};

export default HomeScreen;
