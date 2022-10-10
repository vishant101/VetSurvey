import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';

interface Props {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Button = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
