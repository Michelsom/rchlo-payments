import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Payment, Simulation} from '../models/userData';

interface PaymentState {
  simulation: Simulation | null;
  payment: Payment;
}

const initialState: PaymentState = {
  simulation: {
    amountToPay: 0,
    installmentAmount: 0,
    installments: 0,
    fees: {
      fixed: {
        amount: 0,
        percentage: 0,
      },
      installments: {
        amount: 0,
        percentage: 0,
      },
    },
  },
  payment: {
    transactionId: '',
    amount: 0,
    currency: '',
    receiver: {
      name: '',
      id: '',
    },
    method: '',
    simulation: [],
  },
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentInfo(state, action: PayloadAction<Payment>) {
      state.payment = action.payload;
    },
    setInstallments(state, action: PayloadAction<Simulation>) {
      state.simulation = action.payload;
    },
    clearInstallments(state) {
      state.simulation = null;
    },
  },
});

export const {setPaymentInfo, setInstallments, clearInstallments} =
  paymentSlice.actions;
export default paymentSlice.reducer;
