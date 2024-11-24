import React from 'react';
import {GlobalColor} from '../../models/styleModel';

import {ViewStyle} from 'react-native';
import {GlobalIcon} from '../GlobalIcons';
import {ActionButton} from './styles';

export const GlobalIconButton = ({
  iconName,
  action,
  style,
  iconColor = 'Green.0',
  iconSize = 28,
  testID = 'close-button',
  accessibilityLabel = 'close',
}: {
  iconName: string;
  action?: () => void;
  style?: ViewStyle;
  iconColor?: GlobalColor;
  iconSize?: number;
  testID?: string;
  accessibilityLabel?: string;
}) => (
  <ActionButton
    onPress={action}
    style={style}
    testID={testID}
    accessibilityLabel={accessibilityLabel}>
    <GlobalIcon iconName={iconName} color={iconColor} size={iconSize} />
  </ActionButton>
);
