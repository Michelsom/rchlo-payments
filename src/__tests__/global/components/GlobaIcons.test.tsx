import {render} from '@testing-library/react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {GlobalIcon} from '../../../global/components/GlobalIcons';
import {GetColor} from '../../../utils/getColor';

jest.mock('react-native-vector-icons/Ionicons', () => {
  const Ionicons = (props: any) => <div {...props} />;
  Ionicons.hasIcon = jest.fn();
  return Ionicons;
});
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  const MaterialCommunityIcon = (props: any) => <div {...props} />;
  MaterialCommunityIcon.hasIcon = jest.fn();
  return MaterialCommunityIcon;
});
jest.mock('react-native-vector-icons/MaterialIcons', () => {
  const MaterialIcon = (props: any) => <div {...props} />;
  MaterialIcon.hasIcon = jest.fn();
  return MaterialIcon;
});
jest.mock('../../../utils/getColor', () => ({
  GetColor: jest.fn(),
}));

describe('GlobalIcon', () => {
  it('renders the correct icon library', () => {
    (Ionicons.hasIcon as jest.Mock).mockReturnValueOnce(true);
    (GetColor as jest.Mock).mockReturnValueOnce('#000000');

    const {getByTestId} = render(
      <GlobalIcon iconName="home" color={'Green.0'} size={24} testID="icon" />,
    );

    expect(getByTestId('icon')).toBeTruthy();
    expect(Ionicons.hasIcon).toHaveBeenCalledWith('home');
  });

  it('returns null if no icon library has the icon', () => {
    (Ionicons.hasIcon as jest.Mock).mockReturnValueOnce(false);
    (MaterialIcon.hasIcon as jest.Mock).mockReturnValueOnce(false);
    (MaterialCommunityIcon.hasIcon as jest.Mock).mockReturnValueOnce(false);

    const {queryByTestId} = render(
      <GlobalIcon
        iconName="nonexistent"
        color={'Green.0'}
        size={24}
        testID="icon"
      />,
    );

    expect(queryByTestId('icon')).toBeNull();
  });
});
