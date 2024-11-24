interface AccountOwner {
  name: string;
  id: string;
}

export interface Card {
  cardId: string;
  name: string;
  securityCode: string;
  cardNumber: string;
  holder: string;
  expirationDate: string;
  brand: string;
  favorite: boolean;
  used: boolean;
}

interface Account {
  accountId: string;
  balance: number;
  currency: string;
  status: string;
  owner: AccountOwner;
  cards: Card[];
}

export interface Fees {
  fixed: {
    amount: number;
    percentage: number;
  };
  installments: {
    amount: number;
    percentage: number;
  };
}

export interface Simulation {
  amountToPay: number;
  installmentAmount: number;
  installments: number;
  fees: Fees;
}

interface Receiver {
  name: string;
  id: string;
}

export interface Payment {
  transactionId: string;
  amount: number;
  currency: string;
  receiver: Receiver;
  method: string;
  simulation: Simulation[];
}

export interface DataMock {
  account: Account;
  payment: Payment;
}
