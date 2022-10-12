import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {ButtonContainer, ButtonText} from './styles';

interface Props {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Button = ({text, onPress}: Props) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
