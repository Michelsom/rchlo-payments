import {render} from '@testing-library/react-native';
import React from 'react';
import {SendTransaction} from '../../../screens/sendTransaction';
import {useSendTransactionViewModel} from '../../../screens/sendTransaction/viewModel';
jest.mock('../../../screens/sendTransaction/viewModel', () => ({
  useSendTransactionViewModel: jest.fn(),
}));

describe('SendTransaction', () => {
  it('renders loading state correctly', () => {
    (useSendTransactionViewModel as jest.Mock).mockReturnValue({
      loading: true,
      dateNow: '',
      handleRightAction: jest.fn(),
      payment: {},
    });

    const {getByText} = render(<SendTransaction />);

    expect(getByText('Processando\nsua transferência')).toBeTruthy();
  });

  it('renders transaction success state correctly', async () => {
    (useSendTransactionViewModel as jest.Mock).mockReturnValue({
      loading: false,
      dateNow: '01/01/2023',
      handleRightAction: jest.fn(),
      payment: {
        receiver: {name: 'Maria da Silva'},
        amount: 100,
      },
    });

    const {getByText} = render(<SendTransaction />);

    expect(getByText('Pix realizado com\nsucesso!')).toBeTruthy();
    expect(getByText('Maria da Silva')).toBeTruthy();
    expect(getByText('R$100.00')).toBeTruthy();
    expect(getByText('01/01/2023')).toBeTruthy();
  });
});
