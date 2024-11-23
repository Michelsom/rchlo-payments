import {Platform} from 'react-native';
import styled from 'styled-components/native';
import primitive from '../../global/styles/primitive';

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: ${primitive.colors.Neutral[0]};
  border-radius: 8px;
  margin-top: 16px;
  ${Platform.OS === 'ios'
    ? 'boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.08)'
    : 'elevation: 2.5'}
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
