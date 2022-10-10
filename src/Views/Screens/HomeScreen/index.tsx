import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, ActivityIndicator, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {APP_STRINGS} from '../../../AppStyles';
import {APP_IMAGES} from '../../../Assets';
import {StackParamList} from '../../../Navigation/types';
import {fetchQuestions} from '../../../Redux/Questions';
import {RootState} from '../../../Store/types';
import {Button} from '../../Components';
import {HomeText, PageContainer} from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const questionsStatus = useSelector(
    (state: RootState) => state.questionsState.status,
  );

  useEffect(() => {
    if (questionsStatus === 'idle') {
      dispatch(fetchQuestions());
    }
  }, [questionsStatus, dispatch]);

  const renderSpinner = () => <ActivityIndicator size={'large'} />;

  const renderError = () => <Text>{APP_STRINGS.ERROR_TEXT}</Text>;

  const renderHome = () => (
    <>
      <Image source={APP_IMAGES.doctor} />
      <HomeText>{APP_STRINGS.HOME_TEXT}</HomeText>
      <Button
        text={'GetStarted'}
        onPress={() => navigation.navigate('Questions')}
      />
    </>
  );

  const render = () => {
    switch (questionsStatus) {
      case 'succeeded':
        return renderHome();
      case 'failed':
        return renderError();
      case 'idle':
      case 'loading':
      default:
        return renderSpinner();
    }
  };

  return <PageContainer>{render()}</PageContainer>;
};

export default HomeScreen;
