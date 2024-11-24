import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {SelectPaymentButton} from '../../components/SelectPaymentButton';

describe('SelectPaymentButton', () => {
  const handleButtonMock = jest.fn();

  it('renders correctly with required props', () => {
    const {getByText} = render(
      <SelectPaymentButton
        handleButton={handleButtonMock}
        title="Test Title"
        selected={false}
      />,
    );

    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders description when provided', () => {
    const {getByText} = render(
      <SelectPaymentButton
        handleButton={handleButtonMock}
        title="Test Title"
        description="Test Description"
        selected={false}
      />,
    );

    expect(getByText('Test Description')).toBeTruthy();
  });

  it('renders the correct icon for the brand card', () => {
    const {getByTestId} = render(
      <SelectPaymentButton
        handleButton={handleButtonMock}
        title="Test Title"
        selected={false}
        brandCard="amex"
      />,
    );

    expect(getByTestId('amex-icon')).toBeTruthy();
  });

  it('calls handleButton when pressed', () => {
    const {getByTestId} = render(
      <SelectPaymentButton
        handleButton={handleButtonMock}
        title="Test Title"
        selected={false}
      />,
    );

    fireEvent.press(getByTestId('button-container'));
    expect(handleButtonMock).toHaveBeenCalled();
  });

  it('renders radio button when hasRadio is true', () => {
    const {getByTestId} = render(
      <SelectPaymentButton
        handleButton={handleButtonMock}
        title="Test Title"
        selected={false}
        hasRadio={true}
      />,
    );

    expect(getByTestId('radio-button')).toBeTruthy();
  });
});
