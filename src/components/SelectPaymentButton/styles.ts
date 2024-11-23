import {Platform} from 'react-native';
import styled from 'styled-components/native';
import primitive from '../../global/styles/primitive';

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{hasDescription: boolean}>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({hasDescription}) => (!hasDescription ? 5 : 16)}px 10px;
  background-color: ${primitive.colors.Neutral[0]};
  border-radius: 8px;
  margin-top: ${({hasDescription}) => (!hasDescription ? 16 : 12)}px;
  border: 0.33px solid ${primitive.colors.Neutral[200]};
  ${({hasDescription}) =>
    Platform.OS === 'ios'
      ? !hasDescription
        ? 'boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.08)'
        : 'boxShadow: 0px 2px 2px rgba(0, 0, 0, 0.05)'
      : !hasDescription
      ? 'elevation: 2'
      : 'elevation: 1'};
`;

export const RadioContainer = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const CardInfoContainer = styled.View`
  width: 90%;
  justify-content: center;
  flex-direction: column;
  padding: 8px 0px;

  justify-content: space-around;
`;

export const CardDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;
