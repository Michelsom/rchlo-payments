import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usePayment} from '../../context/payment.context';
import {clearInstallments} from '../../store/paymentSlice';
import {RootState} from '../../store/store';

export const useSendTransactionViewModel = () => {
  const [loading, setLoading] = useState(true);
  const {payment} = useSelector((store: RootState) => store.payment);
  const dateNow = dayjs().format('DD/MM/YYYY');
  const {goBack} = useNavigation();
  const {clearPayment} = usePayment();
  const dispatch = useDispatch();

  async function sendPayment() {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error('Error sending payment:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleRightAction = () => {
    clearPayment();
    dispatch(clearInstallments());
    goBack();
  };

  return {loading, sendPayment, payment, dateNow, handleRightAction};
};
