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
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';
import MyStack from './src/Router';
import TabAll from './src/containers/NextTab/TabAll';
import ImageShow from './src/components/ImageShow';
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      {/* <Playmusic/> */}
      {/* <ImageShow/> */}
      {/* <TabAll/> */}
    </NavigationContainer>
  );
}
