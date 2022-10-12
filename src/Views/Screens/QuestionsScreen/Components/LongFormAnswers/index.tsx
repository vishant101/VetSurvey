import React from 'react';
import {TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Question, updateAnswer} from '../../../../../Redux/Questions';
import {RootState} from '../../../../../Store/types';

interface Props {
  question: Question;
}

const LongFormAnswers = (props: Props) => {
  const {question} = props;
  const dispatch = useDispatch();
  const currentAnswer = useSelector(
    (state: RootState) => state.questionsState.answers[question.key]?.answer,
  );

  const onChange = (value: string) => {
    dispatch(updateAnswer({answer: [value], questionKey: question.key}));
  };

  return (
    <TextInput
      numberOfLines={5}
      onChangeText={onChange}
      style={{
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10,
      }}
      maxLength={40}
      editable
      multiline
      value={currentAnswer || ''}
    />
  );
};

export default LongFormAnswers;
