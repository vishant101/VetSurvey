import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Question,
  selectAllQuestions,
  resetAnswers,
} from '../../../Redux/Questions';

import {
  ButtonContainer,
  ButtonText,
  Footer,
  PageContainer,
  QuestionContainer,
  QuestionsList,
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
import {APP_STRINGS} from '../../../AppStyles';

interface RenderItemProp {
  item: Question;
}

const QuestionsScreen = () => {
  const questions = useSelector(selectAllQuestions);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const createAlert = () =>
    Alert.alert(
      APP_STRINGS.SUBMISSION_ALERT_TITLE,
      APP_STRINGS.SUBMISSION_ALERT_MESSAGE,
      [
        {
          text: APP_STRINGS.SUBMISSION_ALERT_BUTTON_TEXT,
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

  const renderFooter = () => (
    <Footer>
      <ButtonContainer onPress={() => dispatch(resetAnswers())}>
        <ButtonText>{APP_STRINGS.RESET}</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={() => createAlert()}>
        <ButtonText>{APP_STRINGS.SUBMIT}</ButtonText>
      </ButtonContainer>
    </Footer>
  );

  return (
    <PageContainer>
      <QuestionsList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item: Question) => item.key.toString()}
        ItemSeparatorComponent={() => <Seperator />}
      />
      {renderFooter()}
    </PageContainer>
  );
};

export default QuestionsScreen;
