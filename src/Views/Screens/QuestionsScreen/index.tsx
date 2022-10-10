import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {Question, selectAllQuestions} from '../../../Redux/Questions';
import {
  PageContainer,
  QuestionContainer,
  QuestionTitle,
  Seperator,
} from './styles';
import {RadioButtonAnswers} from './Components';

interface RenderItemProp {
  item: Question;
}

const QuestionsScreen = () => {
  const questions = useSelector(selectAllQuestions);
  const [answers, setAnswers] = useState(questions);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const renderAnswerComponent = (question: Question) => {
    switch (question.type) {
      case 'radio-button':
        return <RadioButtonAnswers question={question} />;
      case 'check-box':
      case 'number-selection':
      case 'long-form':
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
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item: Question) => item.key.toString()}
        ItemSeparatorComponent={() => <Seperator />}
      />
    </PageContainer>
  );
};

export default QuestionsScreen;
