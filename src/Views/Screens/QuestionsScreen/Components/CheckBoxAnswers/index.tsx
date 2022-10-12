import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Question, updateAnswer} from '../../../../../Redux/Questions';
import {RootState} from '../../../../../Store/types';
import {Container, RowContainer, RowText} from './styles';

interface Props {
  question: Question;
}

const CheckBoxAnswers = (props: Props) => {
  const {question} = props;
  const dispatch = useDispatch();
  const currentAnswer = useSelector(
    (state: RootState) => state.questionsState.answers[question.key]?.answer,
  );

  const onChange = (newValue: boolean, item: string) => {
    if (currentAnswer) {
      let newAnswer = [...currentAnswer];
      if (!currentAnswer.includes(item)) {
        newAnswer = newAnswer.concat(item);
      } else {
        if (currentAnswer.length === 1) {
          newAnswer = [];
        } else {
          const index = newAnswer.indexOf(item);
          if (index > -1) {
            newAnswer.splice(index, 1);
          }
        }
      }
      dispatch(updateAnswer({answer: newAnswer, questionKey: question.key}));
    } else {
      dispatch(updateAnswer({answer: [item], questionKey: question.key}));
    }
  };

  return (
    <Container>
      {question.options?.map((item, key) => (
        <RowContainer key={key}>
          <CheckBox
            onAnimationType={'fill'}
            offAnimationType={'fill'}
            boxType={'square'}
            disabled={false}
            value={currentAnswer?.includes(item)}
            onValueChange={newValue => onChange(newValue, item)}
          />
          <RowText>{item}</RowText>
        </RowContainer>
      ))}
    </Container>
  );
};

export default CheckBoxAnswers;
