import React from 'react';
import {FlexStyle, View, ViewStyle} from 'react-native';

interface FlexContainerProps {
  direction: 'row' | 'column';
  justify?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  style?: ViewStyle;
  children: React.ReactNode;
  testID?: string;
}

export const GlobalContainer: React.FC<FlexContainerProps> = ({
  direction,
  justify = 'flex-start',
  alignItems = 'stretch',
  style,
  children,
  testID = 'container',
}) => {
  return (
    <View
      testID={testID}
      style={[
        {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: alignItems,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
