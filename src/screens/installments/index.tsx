import React from 'react';
import {FlatList, ListRenderItem, Modal, View} from 'react-native';
import {PaymentResume} from '../../components/PaymentResume';
import {SelectPaymentButton} from '../../components/SelectPaymentButton';
import {GlobalContainer} from '../../global/components/GlobalContainer';
import {Simulation} from '../../models/userData';
import {maskValue} from '../../utils/masks';
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
    payment,
    panResponder,
    setSimulationData,
    simulationData,
    saveInstallments,
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
      onRequestClose={() => {
        if (onClose) {
          onClose();
        }
      }}
      transparent={true}
      testID="modal-installments">
      <GlobalContainer
        direction="column"
        alignItems="center"
        justify="center"
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        children={
          <>
            <S.ContentContainer>
              <S.HandleBar {...panResponder.panHandlers} testID="handle-bar" />
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
              handleButton={() => {
                if (simulationData) {
                  saveInstallments();
                }
              }}
            />
          </>
        }
      />
    </Modal>
  );
};
