import styled from 'styled-components/native';
import primitive from '../../../../global/styles/primitive';

export const InfoContainer = styled.View`
  background-color: #fff;
  width: 100%;
  min-height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 16px;
  padding: 16px;
  border: 1px solid ${primitive.colors.Neutral[100]};
`;
