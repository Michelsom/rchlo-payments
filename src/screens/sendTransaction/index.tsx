import React from 'react';
import {CheckedAnimation, LoadingAnimation} from '../../assets/lottie';
import {HeaderComponent} from '../../components/HeaderComponent';
import {GlobalContainer} from '../../global/components/GlobalContainer';
import GlobalSafeAreaView from '../../global/components/GlobalSafeArea';
import {GlobalTextComponent} from '../../global/components/GlobalTextComponent';
import {maskValue} from '../../utils/masks';
import * as S from './styles';
import {useSendTransactionViewModel} from './viewModel';
export const SendTransaction = () => {
  const {loading, sendPayment, payment, dateNow, handleRightAction} =
    useSendTransactionViewModel();

  if (loading) {
    return (
      <S.Container onLayout={sendPayment}>
        <S.Animation
          source={LoadingAnimation}
          autoPlay
          loop
          testID="loading-animation"
        />
        <GlobalTextComponent
          color="Neutral.0"
          fontSize={34}
          lineHeight={38}
          fontFamily="montserratBold"
          textAlign="center"
          text={'Processando\nsua transferência'}
        />
      </S.Container>
    );
  }

  return (
    <GlobalSafeAreaView>
      <S.ContentView>
        <HeaderComponent
          rightIconName="close"
          handleRightAction={handleRightAction}
        />
        <GlobalTextComponent
          color="Neutral.900"
          fontSize={32}
          fontFamily="montserratBold"
          style={{width: '100%', textAlign: 'center', marginTop: 16}}
          text={'Pix realizado com\nsucesso!'}
        />
        <S.Animation source={CheckedAnimation} loop={false} />

        <GlobalContainer
          direction="column"
          justify="space-between"
          alignItems="center"
          style={{width: '100%'}}>
          <GlobalTextComponent
            color="Neutral.800"
            fontSize={22}
            lineHeight={26}
            fontFamily="montserratRegular"
            style={{width: '100%'}}
            textAlign="center"
            text={'Para'}
          />
          <GlobalTextComponent
            color="Neutral.900"
            fontSize={24}
            fontFamily="montserratBold"
            style={{width: '100%'}}
            textAlign="center"
            text={payment.receiver.name}
          />
          <GlobalContainer
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{width: '100%', marginTop: 32}}>
            <GlobalContainer
              direction="column"
              justify="space-between"
              alignItems="center"
              style={{width: '50%'}}>
              <GlobalTextComponent
                color="Neutral.900"
                fontSize={22}
                lineHeight={32}
                fontFamily="montserratRegular"
                textAlign="center"
                text={'Valor'}
              />
              <GlobalTextComponent
                color="Neutral.900"
                fontSize={24}
                lineHeight={34}
                fontFamily="montserratBold"
                textAlign="center"
                text={maskValue(payment.amount)}
              />
            </GlobalContainer>
            <GlobalContainer
              direction="column"
              justify="space-between"
              alignItems="center"
              style={{width: '50%'}}>
              <GlobalTextComponent
                color="Neutral.900"
                fontSize={22}
                lineHeight={32}
                fontFamily="montserratRegular"
                textAlign="center"
                text={'Data'}
              />
              <GlobalTextComponent
                color="Neutral.900"
                fontSize={24}
                lineHeight={34}
                fontFamily="montserratBold"
                textAlign="center"
                text={dateNow}
              />
            </GlobalContainer>
          </GlobalContainer>
        </GlobalContainer>
      </S.ContentView>
    </GlobalSafeAreaView>
  );
};
