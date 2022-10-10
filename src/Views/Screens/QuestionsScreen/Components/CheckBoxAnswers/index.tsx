import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {Question, updateAnswer} from '../../../../../Redux/Questions';
import {RootState} from '../../../../../Store/types';

interface Props {
  question: Question;
}

const CheckBoxAnswers = (props: Props) => {
  const dispatch = useDispatch();
  const {question} = props;
  const currentAnswer = useSelector(
    (state: RootState) => state.questionsState.answers[question.key]?.answer,
  );

  console.log(currentAnswer);

  const onChange = (newValue: boolean, item: string) => {
    console.log('item', item, newValue);
    if (newValue) {
      dispatch(updateAnswer({answer: item, questionKey: question.key}));
    }
  };

  return (
    <View>
      {question.options?.map((item, key) => (
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            key={key}
            disabled={currentAnswer === item}
            value={currentAnswer === item}
            onValueChange={newValue => onChange(newValue, item)}
          />
          <Text key={item}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default CheckBoxAnswers;
