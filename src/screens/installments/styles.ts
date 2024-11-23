import {View} from 'react-native';
import styled from 'styled-components/native';
import primitive from '../../global/styles/primitive';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const ContentContainer = styled(View)`
  width: 100%;
  height: 90%;
  background-color: ${primitive.colors.Neutral[50]};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px;
`;

export const HandleBar = styled(View)`
  width: 40px;
  height: 4px;
  background-color: ${primitive.colors.Neutral[300]};
  border-radius: 2px;
  align-self: center;
  margin-bottom: 16px;
`;