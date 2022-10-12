import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Slider from '@react-native-community/slider';
import {Question, updateAnswer} from '../../../../../Redux/Questions';
import {RootState} from '../../../../../Store/types';
import {useDispatch, useSelector} from 'react-redux';

interface Props {
  question: Question;
}

const NumberSelectionAnswers = (props: Props) => {
  const {question} = props;
  const dispatch = useDispatch();
  const [temprature, setTemprature] = useState(question.options[0]);
  const currentAnswer = useSelector(
    (state: RootState) => state.questionsState.answers[question.key]?.answer,
  );

  const onChange = (value: number) => {
    setTemprature(value.toString());
    dispatch(
      updateAnswer({answer: [value.toString()], questionKey: question.key}),
    );
  };

  return (
    <View>
      <Slider
        minimumValue={Number(question.options[0])}
        maximumValue={Number(question.options[1])}
        step={1}
        onValueChange={onChange}
        value={Number(currentAnswer) || 0}
      />
      <Text>{temprature} Degrees Celcius</Text>
    </View>
  );
};

export default NumberSelectionAnswers;
