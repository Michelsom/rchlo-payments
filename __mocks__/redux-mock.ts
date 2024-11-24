import configureStore from 'redux-mock-store';
import {userData} from '../data-mock';
import {mockSimulation} from './mocks';

const config = configureStore([]);
export const mockStore = config({
  payment: {
    payment: userData,
    simulation: mockSimulation,
  },
});
