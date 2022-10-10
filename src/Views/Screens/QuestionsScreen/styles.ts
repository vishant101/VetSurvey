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
