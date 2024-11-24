import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';
import primitive from '../../styles/primitive';

export const Column = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.backgroundPrimary};
`;

export const NameMerchant = styled(ShimmerPlaceholder).attrs({
  shimmerColors: [
    primitive.colors.Neutral[100],
    primitive.colors.Neutral[100],
    primitive.colors.Neutral[400],
  ],
})`
  height: 64px;
  width: 100%;
  margin-top: 12px;
  border-radius: 8px;
`;
export const TitleName = styled(ShimmerPlaceholder).attrs({
  shimmerColors: [
    primitive.colors.Neutral[100],
    primitive.colors.Neutral[100],
    primitive.colors.Neutral[400],
  ],
})`
  height: 32px;
  width: 40%;
  margin-top: 48px;
  border-radius: 8px;
`;
