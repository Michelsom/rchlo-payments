import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {HeaderComponent} from '../../components/HeaderComponent';
import {PaymentResume} from '../../components/PaymentResume';
import {SelectPaymentButton} from '../../components/SelectPaymentButton';
import GlobalSafeAreaView from '../../global/components/GlobalSafeArea';
import {Card} from '../../models/userData';
import {maskValue} from '../../utils/masks';
import {Installments} from '../installments';
import {ListHeaderComponent} from './components/ListHeaderComponent';
import {PaymentInfo} from './components/PaymentInfo';
import * as S from './styles';
import {usePaymentViewModel} from './viewModel';

export const Home = () => {
  const {
    cardData,
    handleButton,
    responseData,
    payment,
    sendPayment,
    simulation,
    modalVisible,
    setModalVisible,
  } = usePaymentViewModel();

  const handleInstallmentNavigation = () => {
    if (responseData?.payment.simulation) {
      setModalVisible(true);
    }
  };
  const renderItem: ListRenderItem<Card> = ({item}) => {
    const isSelected = item.cardId === cardData?.card.cardId;
    return (
      <>
        <SelectPaymentButton
          handleButton={() => handleButton(item, 'card')}
          title={`Cartão ${item.brand}`}
          description={`Final ${item.cardNumber}`}
          selected={isSelected}
          brandCard={item.brand}
          hasRadio
        />
        {isSelected ? (
          <>
            <SelectPaymentButton
              handleButton={handleInstallmentNavigation}
              title={
                simulation
                  ? `${simulation.installments}x ${maskValue(
                      simulation.installmentAmount,
                    )}`
                  : 'Escolher parcelas'
              }
              selected
              iconName="keyboard-arrow-right"
            />
            {simulation ? (
              <PaymentInfo simulation={simulation} payment={payment} />
            ) : null}
          </>
        ) : null}
      </>
    );
  };

  return (
    <GlobalSafeAreaView>
      <S.Content>
        <HeaderComponent leftIconName="keyboard-arrow-left" />
        <FlatList
          style={{width: '100%', height: '100%'}}
          ListHeaderComponent={
            <ListHeaderComponent
              handleButton={handleButton}
              responseData={responseData}
              cardData={cardData}
            />
          }
          data={responseData ? responseData.account.cards : []}
          renderItem={renderItem}
          ListFooterComponent={<View style={{height: 120}} />}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </S.Content>
      <Installments
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <PaymentResume
        title="Pagar"
        disableButton={!cardData || (cardData?.type === 'card' && !simulation)}
        handleButton={sendPayment}
      />
    </GlobalSafeAreaView>
  );
};
