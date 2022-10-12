import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Question, updateAnswer} from '../../../../../Redux/Questions';
import {RootState} from '../../../../../Store/types';
import {StyledTextInput} from './styles';

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
    <StyledTextInput
      numberOfLines={5}
      onChangeText={onChange}
      maxLength={40}
      editable
      multiline
      value={currentAnswer || ''}
    />
  );
};

export default LongFormAnswers;
