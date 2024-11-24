import {Payment, Simulation} from '../src/models/userData';

export const mockSimulation: Simulation = {
  amountToPay: 110.0,
  installmentAmount: 27.5,
  installments: 4,
  fees: {
    fixed: {
      amount: 3.0,
      percentage: 0.03,
    },
    installments: {
      amount: 7.0,
      percentage: 0.01,
    },
  },
};

export const mockPayment: Payment = {
  transactionId: 'abc123',
  amount: 1000,
  currency: 'BRL',
  receiver: {
    name: 'Maria da Silva',
    id: '45648941',
  },
  method: 'credit_card',
  simulation: [
    {
      amountToPay: 103.0,
      installmentAmount: 103.0,
      installments: 1,
      fees: {
        fixed: {
          amount: 3.0,
          percentage: 0.03,
        },
        installments: {
          amount: 0.0,
          percentage: 0.01,
        },
      },
    },
  ],
};
