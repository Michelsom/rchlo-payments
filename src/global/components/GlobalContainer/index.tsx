import React from 'react';
import {FlexStyle, LayoutChangeEvent, View, ViewStyle} from 'react-native';

interface FlexContainerProps {
  direction: 'row' | 'column';
  justify?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  style?: ViewStyle;
  children: React.ReactNode;
  testID?: string;
  event?: (event: LayoutChangeEvent) => void;
}

export const GlobalContainer: React.FC<FlexContainerProps> = ({
  direction,
  justify = 'center',
  alignItems = 'center',
  style,
  children,
  testID = 'container',
  event,
}) => {
  return (
    <View
      onLayout={event ? event : undefined}
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
