import React from 'react';
import {FlatList, ListRenderItem, Modal, View} from 'react-native';
import {PaymentResume} from '../../components/PaymentResume';
import {SelectPaymentButton} from '../../components/SelectPaymentButton';
import {Simulation} from '../../models/userData';
import {InstallmentsHeader} from './Components/InstallmentsHeader';
import * as S from './styles';
import {useInstallmentsViewModel} from './viewModel';

export const Installments = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const {
    simulationData,
    setSimulationData,
    saveInstallments,
    maskValue,
    payment,
    panResponder,
  } = useInstallmentsViewModel(onClose);

  const renderItem: ListRenderItem<Simulation> = ({item}) => (
    <SelectPaymentButton
      handleButton={() => setSimulationData(item)}
      title={`${item.installments}x de ${maskValue(item.installmentAmount)}`}
      selected={item === simulationData}
      hasRadio={true}
    />
  );
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}>
      <S.Overlay>
        <S.ContentContainer>
          <S.HandleBar {...panResponder.panHandlers} />
          <InstallmentsHeader onClose={onClose} />
          <FlatList
            data={[...payment.simulation].reverse()}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{height: 120}} />}
          />
        </S.ContentContainer>
        <PaymentResume
          title="Continuar"
          disableButton={!simulationData}
          handleButton={saveInstallments}
        />
      </S.Overlay>
    </Modal>
  );
};
