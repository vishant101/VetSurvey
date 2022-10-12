import styled from 'styled-components/native';
import {APP_COLORS} from '../../../AppStyles';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${APP_COLORS.primary};
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  color: ${APP_COLORS.white};
  font-size: 16px;
`;
