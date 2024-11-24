import {View} from 'react-native';
import styled from 'styled-components/native';
import primitive from '../../global/styles/primitive';

export const ContentContainer = styled(View)`
  width: 100%;
  height: 90%;
  background-color: ${primitive.colors.Neutral[50]};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px;
  bottom: 0px;
  position: absolute;
`;

export const HandleBar = styled(View)`
  width: 60px;
  height: 6px;
  background-color: ${primitive.colors.Neutral[300]};
  border-radius: 2px;
  align-self: center;
  margin-bottom: 16px;
`;
