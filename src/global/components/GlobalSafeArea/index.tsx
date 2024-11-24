import React from 'react';
import {TextStyle} from 'react-native';
import {SafeAreaStyle} from './styles';

const GlobalSafeAreaView = ({
  children,
  style,
  alignHorizontal,
  alignVertical,
  direction,
  testID = 'safe-area',
}: {
  children: React.ReactNode;
  style?: TextStyle;
  alignHorizontal?: 'flex-start' | 'center' | 'flex-end';
  alignVertical?: 'flex-start' | 'center' | 'flex-end';
  direction?: 'row' | 'column';
  testID?: string;
}) => {
  return (
    <SafeAreaStyle
      testID={testID}
      style={[style]}
      alignHorizontal={alignHorizontal}
      alignVertical={alignVertical}
      direction={direction}>
      {children}
    </SafeAreaStyle>
  );
};

export default GlobalSafeAreaView;
