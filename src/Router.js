import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from './containers/Intro';
import TabOne from './containers/NextTab/TabOne';
import TabTwo from './containers/NextTab/TabTwo';
import TabThree from './containers/NextTab/TabThree';
import TabFour from './containers/NextTab/TabFour';
import TabFive from './containers/NextTab/TabFive';
import TabSix from './containers/NextTab/TabSix';
import TabSeven from './containers/NextTab/TabSeven';
import TabEight from './containers/NextTab/TabEight';
import TabAll from './containers/NextTab/TabAll';
import Info from './containers/Info/Index';
import InfoTwo from './containers/Info/InfoTwo';
import Send from './containers/Send';
import TestReduxClass from './TestReduxClass';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Intro" headerMode="none">
      <Stack.Screen name="TestReduxClass" component={TestReduxClass} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="TabOne" component={TabOne} />
      <Stack.Screen name="TabTwo" component={TabTwo} />
      <Stack.Screen name="TabThree" component={TabThree} />
      <Stack.Screen name="TabFour" component={TabFour} />
      <Stack.Screen name="TabFive" component={TabFive} />
      <Stack.Screen name="TabSix" component={TabSix} />
      <Stack.Screen name="TabSeven" component={TabSeven} />
      <Stack.Screen name="TabEight" component={TabEight} />
      <Stack.Screen name="TabAll" component={TabAll} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="InfoTwo" component={InfoTwo} />
      <Stack.Screen name="Send" component={Send} />
    </Stack.Navigator>
  );
}

export default MyStack;
