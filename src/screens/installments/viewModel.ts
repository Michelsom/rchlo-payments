import {useState} from 'react';
import {PanResponder} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Simulation} from '../../models/userData';
import {setInstallments} from '../../store/paymentSlice';
import {RootState} from '../../store/store';
import {maskValue} from '../../utils/masks';

export const useInstallmentsViewModel = (onClose: () => void) => {
  const dispatch = useDispatch();
  const [simulationData, setSimulationData] = useState<Simulation | null>(null);
  const {payment} = useSelector((store: RootState) => store.payment);

  const saveInstallments = () => {
    if (simulationData) {
      dispatch(setInstallments(simulationData));
      onClose();
      setSimulationData(null);
    }
  };

  const getSimulationData = (installments: Simulation[]) => {
    return installments.reverse();
  };
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dy > 50) {
        onClose();
      }
    },
  });
  return {
    dispatch,
    getSimulationData,
    maskValue,
    payment,
    panResponder,
    saveInstallments,
    simulationData,
    setSimulationData,
  };
};
