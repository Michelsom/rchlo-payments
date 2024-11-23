import React from 'react';
import {GlobalContainer} from '../../../../global/components/GlobalContainer';
import {GlobalTextComponent} from '../../../../global/components/GlobalTextComponent';
import {Payment, Simulation} from '../../../../models/userData';
import {maskValue} from '../../../../utils/masks';
import {InfoContainer} from './styles';
export const PaymentInfo = ({
  simulation,
  payment,
}: {
  simulation: Simulation;
  payment: Payment;
}) => {
  const {installments, fees, installmentAmount} = simulation;
  const cardFee = fees.fixed.amount;
  const installmentFee = fees.installments.amount;
  const totalAmount = installmentAmount * installments;

  return (
    <InfoContainer>
      <GlobalContainer
        direction="column"
        justify="center"
        alignItems="flex-start">
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          style={{marginBottom: 8}}
          fontFamily="montserratRegular"
          text={'Valor a transferir'}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          style={{marginBottom: 8}}
          fontFamily="montserratRegular"
          text={'Taxa do cartão'}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          style={{marginBottom: 8}}
          fontFamily="montserratRegular"
          text={'Taxa de parcelamento'}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          style={{marginBottom: 8}}
          fontFamily="montserratRegular"
          text={'Parcelas + taxas'}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          fontFamily="montserratRegular"
          text={'Valor total a pagar'}
        />
      </GlobalContainer>

      <GlobalContainer
        direction="column"
        justify="center"
        alignItems="flex-end">
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          style={{marginBottom: 8}}
          fontFamily="montserratBold"
          text={maskValue(payment.amount) || ''}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          style={{marginBottom: 8}}
          fontFamily="montserratBold"
          text={maskValue(cardFee || 0)}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          style={{marginBottom: 8}}
          fontFamily="montserratBold"
          text={maskValue(installmentFee) || '-'}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          fontFamily="montserratBold"
          style={{marginBottom: 8}}
          text={`${simulation.installments}x ${maskValue(
            simulation.amountToPay / simulation.installments,
          )}`}
        />
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={14}
          fontFamily="montserratBold"
          text={maskValue(totalAmount) || '-'}
        />
      </GlobalContainer>
    </InfoContainer>
  );
};
