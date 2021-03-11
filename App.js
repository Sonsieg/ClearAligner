/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import Top from './src/components/Top';
import Intro from './src/containers/Intro';
import TabOne from './src/containers/NextTab/TabOne';
export default function App() {
  return (
    // <Provider store={store}>
    //   {/* <PersistGate persistor={persistor}> */}
    //   <NavigationContainer>
    //     <MyStack />
    //     {/* <Playmusic/> */}
    //   </NavigationContainer>
    //   {/* </PersistGate> */}
    // </Provider>
    <View>
      {/* <Intro /> */}
      {/* <Top/> */}
      <TabOne/>
    </View>
  );
}
