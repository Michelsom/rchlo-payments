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
}) => (
  <InfoContainer>
    <GlobalContainer
      direction="row"
      justify="space-between"
      alignItems="center">
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={14}
        lineHeight={20}
        fontFamily="montserratLight"
        text={'Valor a transferir'}
      />
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={14}
        lineHeight={20}
        fontFamily="montserratLight"
        text={maskValue(payment.amount)}
      />
    </GlobalContainer>
    <GlobalContainer
      direction="row"
      justify="space-between"
      alignItems="center">
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={14}
        lineHeight={20}
        fontFamily="montserratLight"
        text={'Taxa do cartão'}
      />
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={12}
        lineHeight={20}
        fontFamily="montserratLight"
        text={maskValue(payment.amount)}
      />
    </GlobalContainer>
    <GlobalContainer
      direction="row"
      justify="space-between"
      alignItems="center">
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={14}
        lineHeight={20}
        fontFamily="montserratLight"
        text={'Taxa de parcelamento'}
      />
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={12}
        lineHeight={20}
        fontFamily="montserratLight"
        text={maskValue(payment.amount)}
      />
    </GlobalContainer>
    <GlobalContainer
      direction="row"
      justify="space-between"
      alignItems="center">
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={14}
        lineHeight={20}
        fontFamily="montserratLight"
        text={'Valor a transferir + taxas'}
      />
      <GlobalTextComponent
        color="Neutral.800"
        fontSize={12}
        lineHeight={20}
        fontFamily="montserratLight"
        text={`${simulation.installments}x ${maskValue(
          simulation.installmentAmount,
        )}`}
      />
    </GlobalContainer>
  </InfoContainer>
);
