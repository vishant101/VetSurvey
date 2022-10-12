import React from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Question,
  selectAllQuestions,
  resetAnswers,
} from '../../../Redux/Questions';

import {
  PageContainer,
  QuestionContainer,
  QuestionTitle,
  Seperator,
} from './styles';
import {
  CheckBoxAnswers,
  NumberSelectionAnswers,
  RadioButtonAnswers,
  LongFormAnswers,
} from './Components';
import {useNavigation} from '@react-navigation/native';

interface RenderItemProp {
  item: Question;
}

const QuestionsScreen = () => {
  const questions = useSelector(selectAllQuestions);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const createAlert = () =>
    Alert.alert(
      'Submission Successful',
      'We have recorded your responses and a vet will be in touch with you shortly',
      [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetAnswers());
            navigation.goBack();
          },
        },
      ],
    );

  const renderAnswerComponent = (question: Question) => {
    switch (question.type) {
      case 'radio-button':
        return <RadioButtonAnswers question={question} />;
      case 'check-box':
        return <CheckBoxAnswers question={question} />;
      case 'number-selection':
        return <NumberSelectionAnswers question={question} />;
      case 'long-form':
        return <LongFormAnswers question={question} />;
      default:
        return null;
    }
  };

  const renderItem = ({item}: RenderItemProp) => {
    return (
      <QuestionContainer>
        <QuestionTitle>{item.title}</QuestionTitle>
        {renderAnswerComponent(item)}
      </QuestionContainer>
    );
  };

  return (
    <PageContainer>
      <View style={{flex: 0.9}}>
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item: Question) => item.key.toString()}
          ItemSeparatorComponent={() => <Seperator />}
        />
      </View>
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => dispatch(resetAnswers())}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => createAlert()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </PageContainer>
  );
};

export default QuestionsScreen;
