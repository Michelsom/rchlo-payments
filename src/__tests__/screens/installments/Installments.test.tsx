import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {mockStore} from '../../../../__mocks__/redux-mock';
import {Installments} from '../../../screens/installments';
import {useInstallmentsViewModel} from '../../../screens/installments/viewModel';

jest.mock('../../../screens/installments/viewModel');

const mockUseInstallmentsViewModel = useInstallmentsViewModel as jest.Mock;

describe('Installments Screen', () => {
  const mockOnClose = jest.fn();

  const defaultMockValues = {
    payment: {simulation: []},
    panResponder: {},
    setSimulationData: jest.fn(),
    simulationData: null,
    saveInstallments: jest.fn(),
  };

  beforeEach(() => {
    mockUseInstallmentsViewModel.mockReturnValue(defaultMockValues);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = (props = {}) => {
    return render(
      <Provider store={mockStore}>
        <Installments isVisible={true} onClose={mockOnClose} {...props} />
      </Provider>,
    );
  };

  it('should render the modal when visible', () => {
    const {getByTestId} = setup();
    expect(getByTestId('modal-installments')).toBeTruthy();
  });

  it('should call onClose when the modal is requested to close', () => {
    const {getByTestId} = setup();
    fireEvent(getByTestId('modal-installments'), 'onRequestClose');
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should render the handle bar', () => {
    const {getByTestId} = setup();
    expect(getByTestId('handle-bar')).toBeTruthy();
  });

  it('should call saveInstallments when the continue button is pressed and simulation data is selected', () => {
    const mockSaveInstallments = jest.fn();
    mockUseInstallmentsViewModel.mockReturnValue({
      ...defaultMockValues,
      simulationData: {installments: 1, installmentAmount: 100},
      saveInstallments: mockSaveInstallments,
    });

    const {getByText} = setup({
      simulation: [{installments: 1, installmentAmount: 100}],
    });
    fireEvent.press(getByText('Continuar'));
    expect(mockSaveInstallments).toHaveBeenCalled();
  });
});
