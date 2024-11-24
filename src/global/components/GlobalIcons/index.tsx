import React from 'react';
import {TextStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {GetColor} from '../../../utils/getColor';
import {GlobalColor} from '../../models/styleModel';

type IconLibraries =
  | typeof Ionicons
  | typeof MaterialIcon
  | typeof MaterialCommunityIcon;

interface IconPropsExtended {
  iconName: string;
  color: GlobalColor;
  size: number;
  style?: TextStyle;
  testID?: string;
}

const iconLibraries: IconLibraries[] = [
  Ionicons,
  MaterialIcon,
  MaterialCommunityIcon,
];

export const GlobalIcon: React.FC<IconPropsExtended> = ({
  iconName,
  color,
  size,
  style,
  testID,
}) => {
  const findIconLibrary = (): IconLibraries | null => {
    for (const IconLib of iconLibraries) {
      if (IconLib.hasIcon && IconLib.hasIcon(iconName)) {
        return IconLib;
      }
    }
    return null;
  };

  const IconLib = findIconLibrary();
  if (!IconLib) {
    return null;
  }
  return (
    <IconLib
      testID={testID}
      style={style}
      name={iconName}
      size={size}
      color={GetColor(color)}
    />
  );
};
