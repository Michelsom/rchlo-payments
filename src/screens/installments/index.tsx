import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {PaymentResume} from '../../components/PaymentResume';
import {SelectPaymentButton} from '../../components/SelectPaymentButton';
import {Simulation} from '../../models/userData';
import {CreateNewOrderSheetProps} from '../../navigate/navigation';
import {InstallmentsHeader} from './Components/InstallmentsHeader';
import {useInstallmentsViewModel} from './InstallmentsViewModel';
import * as S from './styles';

type routeProps = RouteProp<CreateNewOrderSheetProps, 'Installments'>;

export const Installments = () => {
  const {params} = useRoute<routeProps>();
  const {installments} = params;

  const {
    simulationData,
    setSimulationData,
    saveInstallments,
    maskValue,
    goBack,
  } = useInstallmentsViewModel();

  const renderItem: ListRenderItem<Simulation> = ({item}) => (
    <SelectPaymentButton
      handleButton={() => setSimulationData(item)}
      title={`${item.installments}x de ${maskValue(item.installmentAmount)}`}
      selected={item === simulationData}
      hasRadio={true}
    />
  );

  return (
    <S.Container>
      <S.ContentContainer>
        <S.HandleBar />
        <FlatList
          ListHeaderComponent={<InstallmentsHeader onClose={goBack} />}
          data={[...installments].reverse()}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: 120}} />}
        />
      </S.ContentContainer>
      <PaymentResume
        title="Continuar"
        disableButton={!!simulationData}
        handleButton={saveInstallments}
      />
    </S.Container>
  );
};
