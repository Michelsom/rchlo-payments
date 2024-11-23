import {useRoute} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {userData} from '../../../../data-mock';
import {Installments} from '../../../screens/installments';
import {useInstallmentsViewModel} from '../../../screens/installments/InstallmentsViewModel';
import {maskValue} from '../../../utils/masks';

const mockStore = configureStore([]);
const store = mockStore({
  payment: userData.payment,
  account: userData.account,
});
jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
}));

jest.mock('../../../screens/installments/InstallmentsViewModel', () => ({
  useInstallmentsViewModel: jest.fn(),
}));

describe('Installments Screen', () => {
  it('renders correctly with data', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        installments: userData.payment.simulation,
      },
    });

    (useInstallmentsViewModel as jest.Mock).mockReturnValue({
      simulationData: null,
      setSimulationData: jest.fn(),
      saveInstallments: jest.fn(),
      maskValue: jest.fn(value => `${maskValue(value)}`),
      goBack: jest.fn(),
    });

    const {getByText} = render(
      <Provider store={store}>
        <Installments />
      </Provider>,
    );

    expect(getByText('Parcelas do pagamento')).toBeTruthy();
    if (!userData.payment.simulation) {
      return;
    }
    expect(getByText('Continuar')).toBeTruthy();
  });
});
