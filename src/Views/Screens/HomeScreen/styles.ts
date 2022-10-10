import styled from 'styled-components/native';
import {APP_COLORS} from '../../../AppStyles';

export const PageContainer = styled.View`
  flex: 1;
  background-color: ${APP_COLORS.white};
  align-items: center;
  justify-content: center;
`;

export const HomeText = styled.Text`
  font-size: 16px;
  text-align: center;
  padding: 10px 16px;
`;
