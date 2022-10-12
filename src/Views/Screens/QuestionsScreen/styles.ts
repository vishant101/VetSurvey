import styled from 'styled-components/native';
import {APP_COLORS} from '../../../AppStyles';

export const PageContainer = styled.View`
  flex: 1;
  background-color: ${APP_COLORS.white};
  align-items: center;
  justify-content: center;
`;

export const Seperator = styled.View`
  border-color: grey;
  border-bottom-width: 1px;
`;

export const QuestionTitle = styled.Text``;

export const QuestionContainer = styled.View`
  flex-direction: column;
  padding: 20px;
`;

export const QuestionsList = styled.FlatList`
  flex: 0.9;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 40px;
  width: 120px;
  background-color: ${APP_COLORS.primary};
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border-radius: 50px;
  margin: 10px 10px;
`;

export const ButtonText = styled.Text`
  color: ${APP_COLORS.white};
  font-size: 14px;
`;

export const Footer = styled.View`
  border-top-width: 1px;
  flex: 0.1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
