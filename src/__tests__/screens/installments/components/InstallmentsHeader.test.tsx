import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {InstallmentsHeader} from '../../../../screens/installments/Components/InstallmentsHeader';

describe('InstallmentsHeader', () => {
  it('deve renderizar o título e o texto informativo', () => {
    const mockOnClose = jest.fn();
    render(<InstallmentsHeader onClose={mockOnClose} />);

    expect(screen.getByText('Parcelas do pagamento')).toBeTruthy();
    expect(
      screen.getByText(
        'O destinatário receberá á vista o valor total da compra e você pagará parcelado',
      ),
    ).toBeTruthy();
  });

  it('deve chamar onClose quando o botão de fechar é clicado', () => {
    const mockOnClose = jest.fn();
    render(<InstallmentsHeader onClose={mockOnClose} />);

    const closeButton = screen.getByTestId('close-button');
    fireEvent.press(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
