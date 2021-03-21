import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import MyStack from './src/Router';
export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}
