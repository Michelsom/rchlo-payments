import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Home} from '../../../screens/home';

describe('Home Screen', () => {
  it('should render the main components and respond to button presses', () => {
    const {getByText, queryByText} = render(<Home />);

    // Verifica se os textos principais estão sendo renderizados
    expect(getByText('Transferência Pix')).toBeTruthy();
    expect(getByText('Escolha uma forma de pagamento')).toBeTruthy();

    // Verifica se o componente de saldo em conta é renderizado
    const accountBalanceText = 'Saldo em conta';
    expect(queryByText(accountBalanceText)).toBeTruthy();

    // Simula a interação com o botão de saldo em conta
    const accountBalanceButton = getByText(accountBalanceText);
    fireEvent.press(accountBalanceButton);

    // Verifica se o botão de cartões de crédito é renderizado
    const creditCardText = 'Cartões de crédito';
    expect(queryByText(creditCardText)).toBeTruthy();

    // Simula a interação com o botão de cartões de crédito
    const creditCardButton = getByText(creditCardText);
    fireEvent.press(creditCardButton);

    // Verifica se o botão de pagamento está sendo renderizado e é interativo
    const payButton = getByText('Pagar');
    fireEvent.press(payButton);

    // Adicione mais verificações conforme necessário para cobrir outros aspectos da tela
  });

  // Aqui você pode adicionar mais testes para cobrir outros aspectos da tela
});
