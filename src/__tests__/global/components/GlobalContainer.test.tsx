import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';
import {GlobalContainer} from '../../../global/components/GlobalContainer';

describe('GlobalContainer', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <GlobalContainer direction="row">
        <Text>Test Child</Text>
      </GlobalContainer>,
    );
    expect(getByText('Test Child')).toBeTruthy();
  });

  it('applies default styles correctly', () => {
    const {getByTestId} = render(
      <GlobalContainer direction="row" testID="container">
        <Text>Test Child</Text>
      </GlobalContainer>,
    );
    const container = getByTestId('container');
    expect(container.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }),
      ]),
    );
  });

  it('applies custom styles correctly', () => {
    const customStyle = {backgroundColor: 'red'};
    const {getByTestId} = render(
      <GlobalContainer
        direction="column"
        style={customStyle}
        testID="container">
        <Text>Test Child</Text>
      </GlobalContainer>,
    );
    const container = getByTestId('container');
    expect(container.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }),
        customStyle,
      ]),
    );
  });

  it('applies custom justify and alignItems correctly', () => {
    const {getByTestId} = render(
      <GlobalContainer
        direction="row"
        justify="center"
        alignItems="flex-end"
        testID="container">
        <Text>Test Child</Text>
      </GlobalContainer>,
    );
    const container = getByTestId('container');
    expect(container.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }),
      ]),
    );
  });
});
