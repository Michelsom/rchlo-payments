import styled from 'styled-components/native';
import GlobalSafeAreaView from '../../global/components/GlobalSafeArea';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled(GlobalSafeAreaView)`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
`;

export const CardInfoContainer = styled.View`
  background-color: #fff;
  width: 100%;
  min-height: 56px;
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0px 16px;
`;
