import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {mockStore} from '../../../__mocks__/redux-mock';
import {PaymentResume} from '../../components/PaymentResume';

describe('PaymentResume Component', () => {
  const handleButton = jest.fn();

  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <PaymentResume
          title="Pagar"
          handleButton={handleButton}
          disableButton={false}
        />
      </Provider>,
    );
  });

  it('should display the correct title', () => {
    expect(screen.getByText('Valor a ser pago')).toBeTruthy();
  });

  it('should display the correct installment text', () => {
    expect(screen.getByTestId('installmentText')).toBeTruthy();
  });

  it('should call handleButton when button is pressed', () => {
    const button = screen.getByText('Pagar');
    fireEvent.press(button);
    expect(handleButton).toHaveBeenCalled();
  });

  it('should disable the button when disableButton is true', () => {
    render(
      <Provider store={mockStore}>
        <PaymentResume
          title="Pagar"
          handleButton={handleButton}
          disableButton={true}
        />
      </Provider>,
    );
    const button = screen.getByText('Pagar');
    expect(button).toBeDisabled();
  });
});
