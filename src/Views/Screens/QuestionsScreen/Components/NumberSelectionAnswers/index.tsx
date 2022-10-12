import React, {useState, useEffect} from 'react';
import Slider from '@react-native-community/slider';
import {Question, updateAnswer} from '../../../../../Redux/Questions';
import {RootState} from '../../../../../Store/types';
import {useDispatch, useSelector} from 'react-redux';
import {Container, TempratureText} from './styles';

interface Props {
  question: Question;
}

const NumberSelectionAnswers = (props: Props) => {
  const {question} = props;
  const dispatch = useDispatch();
  const initialValue = question.options ? Number(question.options[0]) : 0;
  const maximumValue = question.options ? Number(question.options[1]) : 1;
  const [temprature, setTemprature] = useState(initialValue);
  const currentAnswer = useSelector(
    (state: RootState) => state.questionsState.answers[question.key]?.answer,
  );

  const onChange = (value: number) => {
    dispatch(
      updateAnswer({answer: value.toString(), questionKey: question.key}),
    );
  };

  useEffect(() => {
    const temp = typeof currentAnswer === 'string' ? currentAnswer : '';
    setTemprature(Number(temp));
  }, [currentAnswer]);

  return (
    <Container>
      <Slider
        minimumValue={initialValue}
        maximumValue={maximumValue}
        step={1}
        onValueChange={onChange}
        value={Number(currentAnswer) || 0}
      />
      <TempratureText>
        {temprature ? temprature : initialValue} Degrees Celsius
      </TempratureText>
    </Container>
  );
};

export default NumberSelectionAnswers;
