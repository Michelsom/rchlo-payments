import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native-svg';
import GlobalSafeAreaView from '../../../global/components/GlobalSafeArea';

describe('GlobalSafeAreaView', () => {
  it('renders children correctly', () => {
    const {getByTestId} = render(
      <GlobalSafeAreaView
        testID="test-child"
        children={<Text>Test Child</Text>}
      />,
    );
    expect(getByTestId('test-child')).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyle = {backgroundColor: 'red'};
    const {getByTestId} = render(
      <GlobalSafeAreaView style={customStyle} testID="safe-area">
        <Text>Test Child</Text>
      </GlobalSafeAreaView>,
    );
    expect(getByTestId('safe-area').props.style).toContainEqual(customStyle);
  });

  it('applies alignment props correctly', () => {
    const {getByTestId} = render(
      <GlobalSafeAreaView
        alignHorizontal="center"
        alignVertical="center"
        direction="row"
        testID="safe-area">
        <Text>Test Child</Text>
      </GlobalSafeAreaView>,
    );
    const safeAreaProps = getByTestId('safe-area').props;
    expect(safeAreaProps.alignHorizontal).toBe('center');
    expect(safeAreaProps.alignVertical).toBe('center');
    expect(safeAreaProps.direction).toBe('row');
  });
});
