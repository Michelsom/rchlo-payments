import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Simulation} from '../../models/userData';
import {setInstallments} from '../../store/paymentSlice';
import {maskValue} from '../../utils/masks';

export const useInstallmentsViewModel = () => {
  const dispatch = useDispatch();
  const [simulationData, setSimulationData] = useState<Simulation | null>(null);
  const {navigate, goBack} = useNavigation();

  const saveInstallments = () => {
    if (simulationData) {
      dispatch(setInstallments(simulationData));
      navigate('Home');
    }
  };

  const getSimulationData = (installments: Simulation[]) => {
    return installments.reverse();
  };

  return {
    simulationData,
    setSimulationData,
    saveInstallments,
    getSimulationData,
    maskValue,
    goBack,
  };
};
