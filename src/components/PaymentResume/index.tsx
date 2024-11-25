import React from 'react';
import {useSelector} from 'react-redux';
import {GlobalTextComponent} from '../../global/components/GlobalTextComponent';
import {RootState} from '../../store/store';
import {maskValue} from '../../utils/masks';
import * as S from './styles';

export const PaymentResume = ({
  title,
  handleButton,
  disableButton,
}: {
  title: string;
  handleButton: () => void;
  disableButton: boolean;
}) => {
  const paymentData = useSelector((store: RootState) => store.payment.payment);
  const simulation = useSelector(
    (store: RootState) => store.payment.simulation,
  );
  const installmentText =
    simulation !== null && simulation.installments
      ? `${simulation.installments}x de ${maskValue(
          simulation.installmentAmount,
        )}`
      : maskValue(paymentData.amount);
  return (
    <S.Container
      disabled={disableButton}
      activeOpacity={1}
      style={{boxShadow: '0px -0.1px 10px rgba(0, 0, 0, 0.15)'}}
      onPress={handleButton}>
      <S.InfoContainer>
        <GlobalTextComponent
          color="Neutral.900"
          fontSize={16}
          fontFamily="montserratLight"
          text="Valor a ser pago"
        />
        <GlobalTextComponent
          color="Neutral.900"
          fontSize={20}
          fontFamily="montserratBold"
          testId="installmentText"
          text={installmentText}
          style={{marginTop: 8}}
        />
      </S.InfoContainer>
      <S.ButtonContainer disabled={disableButton}>
        <GlobalTextComponent
          color="Neutral.0"
          fontSize={18}
          lineHeight={18}
          fontFamily="montserratMedium"
          text={title || 'Pagar'}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};
