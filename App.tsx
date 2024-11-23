/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';
import {PaymentProvider} from './src/context/payment.context';
import theme from './src/global/styles/primitive';
import {Routes} from './src/routes';
import {persistor, store} from './src/store/store';

export function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <PaymentProvider>
              <Routes />
            </PaymentProvider>
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
