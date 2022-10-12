import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Question, updateAnswer} from '../../../../../Redux/Questions';
import {RootState} from '../../../../../Store/types';
import {Container, RowContainer, RowText} from './styles';

interface Props {
  question: Question;
}

const RadioButtonAnswers = (props: Props) => {
  const dispatch = useDispatch();
  const {question} = props;
  const currentAnswer = useSelector(
    (state: RootState) => state.questionsState.answers[question.key]?.answer,
  );

  const onChange = (newValue: boolean, item: string) => {
    if (newValue) {
      dispatch(updateAnswer({answer: item, questionKey: question.key}));
    }
  };

  return (
    <Container>
      {question.options?.map((item, key) => (
        <RowContainer key={key}>
          <CheckBox
            onAnimationType={'fill'}
            offAnimationType={'fill'}
            disabled={currentAnswer === item}
            value={currentAnswer === item}
            onValueChange={newValue => onChange(newValue, item)}
          />
          <RowText>{item}</RowText>
        </RowContainer>
      ))}
    </Container>
  );
};

export default RadioButtonAnswers;
