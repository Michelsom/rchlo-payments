import React, {createContext, useContext} from 'react';
import {Card} from '../models/userData';
import {cardDataPayment, PaymentProps} from './model';

const PixPayment = createContext<PaymentProps>({} as PaymentProps);

export const PaymentProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [cardData, setCardData] = React.useState<cardDataPayment | null>(null);

  const createPayment = (card: Card, type: string) => {
    setCardData({card, type});
  };
  const clearPayment = () => {
    setCardData(null);
  };

  return (
    <PixPayment.Provider value={{createPayment, cardData, clearPayment}}>
      {children}
    </PixPayment.Provider>
  );
};
export function usePayment() {
  return useContext(PixPayment);
}
