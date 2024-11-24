import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {GlobalIconButton} from '../../../global/components/GlobaIconButton';

describe('GlobalIconButton', () => {
  it('renders correctly with default props', () => {
    const {getByTestId} = render(<GlobalIconButton iconName="test-icon" />);
    const button = getByTestId('close-button');
    expect(button).toBeTruthy();
  });

  it('calls the action when pressed', () => {
    const mockAction = jest.fn();
    const {getByTestId} = render(
      <GlobalIconButton iconName="test-icon" action={mockAction} />,
    );
    const button = getByTestId('close-button');
    fireEvent.press(button);
    expect(mockAction).toHaveBeenCalled();
  });

  it('applies the provided style', () => {
    const style = {backgroundColor: 'red'};
    const {getByTestId} = render(
      <GlobalIconButton iconName="test-icon" style={style} />,
    );
    const button = getByTestId('close-button');
    expect(button.props.style).toMatchObject(style);
  });

  it('sets the correct accessibility label', () => {
    const {getByTestId} = render(
      <GlobalIconButton iconName="test-icon" accessibilityLabel="test-label" />,
    );
    const button = getByTestId('close-button');
    expect(button.props.accessibilityLabel).toBe('test-label');
  });
});
