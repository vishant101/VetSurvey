import CheckBox from '@react-native-community/checkbox';
import {current} from '@reduxjs/toolkit';
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
    <View>
      {question.options?.map((item, key) => (
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            boxType={'square'}
            key={key}
            disabled={false}
            value={currentAnswer?.includes(item)}
            onValueChange={newValue => onChange(newValue, item)}
          />
          <Text key={item}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default CheckBoxAnswers;
