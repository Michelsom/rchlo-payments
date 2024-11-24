import {render} from '@testing-library/react-native';
import React from 'react';
import {mockPayment, mockSimulation} from '../../../../../__mocks__/mocks';
import {PaymentInfo} from '../../../../screens/home/components/PaymentInfo';
import {maskValue} from '../../../../utils/masks';
describe('PaymentInfo Component', () => {
  const {installments, fees, installmentAmount} = mockSimulation;
  const cardFee = fees.fixed.amount;
  const installmentFee = fees.installments.amount;
  const totalAmount = installmentAmount * installments;
  it('should render the PaymentInfo component correctly', () => {
    const {getByText} = render(
      <PaymentInfo simulation={mockSimulation} payment={mockPayment} />,
    );

    expect(getByText('Valor a transferir')).toBeTruthy();
    expect(getByText('Taxa do cartão')).toBeTruthy();
    expect(getByText('Taxa de parcelamento')).toBeTruthy();
    expect(getByText('Parcelas + taxas')).toBeTruthy();
    expect(getByText('Valor total a pagar')).toBeTruthy();
    expect(getByText(maskValue(mockPayment.amount))).toBeTruthy();
    expect(getByText(maskValue(cardFee || 0))).toBeTruthy();
    expect(getByText(maskValue(installmentFee))).toBeTruthy();
    expect(
      getByText(
        `${mockSimulation.installments}x ${maskValue(
          mockSimulation.amountToPay / mockSimulation.installments,
        )}`,
      ),
    ).toBeTruthy();
    expect(getByText(maskValue(totalAmount))).toBeTruthy();
  });
});
