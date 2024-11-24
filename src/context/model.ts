import {Card} from '../models/userData';

export interface PaymentProps {
  createPayment: (cardData: Card, type: string) => void;
  cardData?: cardDataPayment | null;
  clearPayment: () => void;
}
export interface cardDataPayment {
  card: Card;
  type: string;
}
