import {StackNavigationProp} from '@react-navigation/stack';
import {Simulation} from '../models/userData';

export type CreateNewOrderSheetProps = {
  Home: undefined;
  Installments: {installments: Simulation[]};
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;

declare module '@react-navigation/native' {
  export function useNavigation<T = NavigationProp>(): T;
}
