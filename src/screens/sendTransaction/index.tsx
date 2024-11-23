import React from 'react';
import {HeaderComponent} from '../../components/HeaderComponent';
import {GlobalContainer} from '../../global/components/GlobalContainer';
import {GlobalIcon} from '../../global/components/GlobalIcons';
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
          source={require('../../assets/lottie/loadingAnimation.json')}
          autoPlay
          loop
        />
        <GlobalTextComponent
          color="Neutral.0"
          fontSize={32}
          lineHeight={34}
          fontFamily="montserratLight"
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
          fontSize={24}
          lineHeight={32}
          fontFamily="montserratLight"
          style={{width: '100%', textAlign: 'left', marginTop: 32}}
          text={'Pix realizado com\nsucesso!'}
        />
        <GlobalIcon
          iconName="check"
          color="Green.600"
          size={100}
          style={{marginTop: 32}}
        />

        <GlobalContainer
          direction="column"
          justify="space-between"
          alignItems="center"
          style={{width: '100%', marginTop: 32}}>
          <GlobalTextComponent
            color="Neutral.700"
            fontSize={20}
            lineHeight={22}
            fontFamily="montserratLight"
            style={{width: '100%'}}
            textAlign="center"
            text={'para'}
          />
          <GlobalTextComponent
            color="Neutral.900"
            fontSize={24}
            lineHeight={32}
            fontFamily="montserratLight"
            style={{width: '100%'}}
            textAlign="center"
            text={payment.receiver.name}
          />
          <GlobalContainer
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{width: '100%', marginTop: 32}}>
            <GlobalTextComponent
              color="Neutral.900"
              fontSize={24}
              lineHeight={32}
              fontFamily="montserratLight"
              style={{width: '50%'}}
              textAlign="center"
              text={maskValue(payment.amount)}
            />
            <GlobalTextComponent
              color="Neutral.900"
              fontSize={24}
              lineHeight={32}
              fontFamily="montserratLight"
              style={{width: '50%'}}
              textAlign="center"
              text={dateNow}
            />
          </GlobalContainer>
        </GlobalContainer>
      </S.ContentView>
    </GlobalSafeAreaView>
  );
};
