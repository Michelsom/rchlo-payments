import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userData} from '../../../data-mock';
import {usePayment} from '../../context/payment.context';
import {DataMock} from '../../models/userData';
import {clearInstallments, setPaymentInfo} from '../../store/paymentSlice';
import {RootState} from '../../store/store';

export const usePaymentViewModel = () => {
  const [responseData, setResponseData] = useState<DataMock | null>(null);
  const {navigate} = useNavigation();
  const {createPayment, cardData} = usePayment();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const {payment, simulation} = useSelector(
    (store: RootState) => store.payment,
  );

  const handleButton = (item: any, type: string) => {
    dispatch(clearInstallments());
    createPayment(item, type);
  };
  const sendPayment = () => {
    navigate('SendTransaction');
  };

  useEffect(() => {
    async function fetchData() {
      const response = userData;
      setTimeout(() => {
        setResponseData(response);
        dispatch(setPaymentInfo(response.payment));
      }, 3000);
    }
    fetchData();
  }, [dispatch]);

  return {
    cardData,
    handleButton,
    navigate,
    responseData,
    sendPayment,
    payment,
    simulation,
    modalVisible,
    setModalVisible,
  };
};
