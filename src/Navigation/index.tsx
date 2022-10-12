import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types';
import {HomeScreen, QuestionsScreen} from '../Views/Screens';
import styles from './styles';

const Navigation = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            title: 'DigiVet',
            headerTitleStyle: styles.homeTextStyle,
          }}
        />
        <Stack.Screen
          name={'Questions'}
          component={QuestionsScreen}
          options={{
            title: 'Questionaire',
            headerTitleStyle: styles.questionsTextStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
