import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {userData} from '../../../../../data-mock';
import {ListHeaderComponent} from '../../../../screens/home/components/ListHeaderComponent';
import {maskValue} from '../../../../utils/masks';

describe('ListHeaderComponent', () => {
  const handleButtonMock = jest.fn();
  const responseDataMock = userData;
  const cardDataMock = {
    card: {
      cardId: userData?.account?.accountId,
      name: 'Conta Midway',
      securityCode: '',
      cardNumber: userData?.account?.accountId,
      holder: userData?.account?.owner.name,
      expirationDate: '',
      brand: 'Midway',
      favorite: false,
      used: false,
    },
    type: 'account',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with active account and balance', () => {
    const {getByText} = render(
      <ListHeaderComponent
        handleButton={handleButtonMock}
        responseData={responseDataMock}
        cardData={cardDataMock}
      />,
    );

    expect(getByText('Transferência Pix')).toBeTruthy();
    expect(getByText('Escolha uma forma de pagamento')).toBeTruthy();
    expect(getByText('Conta Midway')).toBeTruthy();
    expect(getByText('Saldo em conta')).toBeTruthy();
    expect(
      getByText(
        `Disponível: ${maskValue(responseDataMock.account.balance ?? 0)}`,
      ),
    ).toBeTruthy();
    expect(getByText('Cartões de crédito')).toBeTruthy();
  });

  it('calls handleButton with correct parameters when SelectPaymentButton is pressed', () => {
    const {getByText} = render(
      <ListHeaderComponent
        handleButton={handleButtonMock}
        responseData={responseDataMock}
        cardData={cardDataMock}
      />,
    );

    fireEvent.press(getByText('Saldo em conta'));

    expect(handleButtonMock).toHaveBeenCalledWith(
      {
        cardId: userData?.account?.accountId,
        name: 'Conta Midway',
        securityCode: '',
        cardNumber: userData?.account?.accountId,
        holder: userData?.account?.owner.name,
        expirationDate: '',
        brand: 'Midway',
        favorite: false,
        used: false,
      },
      'account',
    );
  });

  it('does not render account balance section if account is inactive', () => {
    const inactiveResponseData = {
      ...responseDataMock,
      account: {
        ...responseDataMock.account,
        status: 'inactive',
      },
    };

    const {queryByText} = render(
      <ListHeaderComponent
        handleButton={handleButtonMock}
        responseData={inactiveResponseData}
        cardData={cardDataMock}
      />,
    );

    expect(queryByText('Conta Midway')).toBeNull();
    expect(queryByText('Saldo em conta')).toBeNull();
    expect(queryByText('Disponível: R$ 1.000,00')).toBeNull();
  });

  it('does not render credit cards section if there are no cards', () => {
    const noCardsResponseData = {
      ...responseDataMock,
      account: {
        ...responseDataMock.account,
        cards: [],
      },
    };

    const {queryByText} = render(
      <ListHeaderComponent
        handleButton={handleButtonMock}
        responseData={noCardsResponseData}
        cardData={cardDataMock}
      />,
    );

    expect(queryByText('Cartões de crédito')).toBeNull();
  });
});
