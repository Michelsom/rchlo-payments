import '@testing-library/jest-native/extend-expect';
import 'jest-styled-components';

import {expect} from '@jest/globals';
global.expect = expect;

jest.mock('react-navigation', () => ({
  NavigationActions: jest.fn(),
  StackActions: jest.fn(),
}));

jest.mock('react-native/Libraries/Components/SafeAreaView/SafeAreaView', () => {
  const SafeAreaView = require('react-native').View;
  return SafeAreaView;
});
