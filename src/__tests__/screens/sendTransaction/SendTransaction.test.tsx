import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {SendTransaction} from '../../../screens/sendTransaction';
import {useSendTransactionViewModel} from '../../../screens/sendTransaction/viewModel';

jest.mock('../../../screens/sendTransaction/viewModel', () => ({
  useSendTransactionViewModel: jest.fn(),
}));
jest.mock('../../../assets/lottie', () => ({
  LoadingAnimation: 'LoadingAnimation',
  CheckedAnimation: 'CheckedAnimation',
}));
const mockUseSendTransactionViewModel =
  useSendTransactionViewModel as jest.Mock;
describe('SendTransaction Component', () => {
  it('should render the loading screen correctly', () => {
    mockUseSendTransactionViewModel.mockReturnValue({
      loading: true,
      sendPayment: jest.fn(),
      payment: {},
      dateNow: '',
      handleRightAction: jest.fn(),
    });

    render(<SendTransaction />);

    expect(screen.getByText('Processando\nsua transferência')).toBeTruthy();

    expect(screen.getByTestId('loading-animation')).toBeTruthy();
  });

  it('should render the loading screen correctly', () => {
    mockUseSendTransactionViewModel.mockReturnValue({
      loading: false,
      sendPayment: jest.fn(),
      payment: {
        receiver: {name: 'João Silva'},
        amount: 12345,
      },
      dateNow: '23/11/2024',
      handleRightAction: jest.fn(),
    });

    render(<SendTransaction />);

    expect(screen.getByText('Pix realizado com\nsucesso!')).toBeTruthy();

    expect(screen.getByText('João Silva')).toBeTruthy();

    expect(screen.getByText('R$ 12.345,00')).toBeTruthy();

    expect(screen.getByText('23/11/2024')).toBeTruthy();
  });

  it('should call handleRightAction when the close button is pressed', () => {
    const handleRightActionMock = jest.fn();

    mockUseSendTransactionViewModel.mockReturnValue({
      loading: false,
      sendPayment: jest.fn(),
      payment: {
        receiver: {name: 'João Silva'},
        amount: 12345,
      },
      dateNow: '23/11/2024',
      handleRightAction: handleRightActionMock,
    });

    render(<SendTransaction />);

    expect(screen.getByText('Pix realizado com\nsucesso!')).toBeTruthy();
    expect(screen.getByText('João Silva')).toBeTruthy();
    expect(screen.getByText('R$ 12.345,00')).toBeTruthy();
    expect(screen.getByText('23/11/2024')).toBeTruthy();
    const closeButton = screen.getByTestId('close');
    fireEvent.press(closeButton);

    expect(handleRightActionMock).toHaveBeenCalledTimes(1);
  });
});
