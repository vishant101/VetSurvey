import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types';
import {HomeScreen, QuestionsScreen} from '../Views/Screens';

const Navigation = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Questions'} component={QuestionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
