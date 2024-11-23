import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';
import primitive from '../../global/styles/primitive';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${primitive.colors.Green[600]};
`;

export const Animation = styled(LottieView)`
  width: 200px;
  height: 200px;
`;

export const ContentView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 16px;
`;
