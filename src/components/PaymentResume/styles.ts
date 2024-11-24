import {Platform} from 'react-native';
import styled from 'styled-components/native';
import primitive from '../../global/styles/primitive';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${Platform.OS === 'android' ? 10 : 12}%;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${primitive.colors.Neutral[0]};
  position: absolute;
  bottom: 0;
`;

export const InfoContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const ButtonContainer = styled.View<{disabled: boolean}>`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: ${({disabled}) =>
    disabled ? primitive.colors.Neutral[500] : primitive.colors.Green[600]};
`;
