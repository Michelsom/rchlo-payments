import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components/native';
import primitive from '../../styles/primitive';

interface SafeProps {
  alignHorizontal?: 'flex-start' | 'center' | 'flex-end';
  alignVertical?: 'flex-start' | 'center' | 'flex-end';
  direction?: 'row' | 'column';
}
export const SafeAreaStyle = styled(SafeAreaView ?? View)<SafeProps>`
  background: ${primitive.colors.Neutral[50]};
  align-items: ${({alignHorizontal = 'center'}) =>
    alignHorizontal as 'flex-start' | 'center' | 'flex-end'};
  flex-direction: ${({direction = 'column'}) => direction as 'row' | 'column'};
  flex: 1;
`;
