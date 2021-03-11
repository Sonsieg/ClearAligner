import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './containers/Intro';
import TabOne from './containers/NextTab/TabOne';
import TabTwo from './containers/NextTab/TabTwo';
import TabThree from './containers/NextTab/TabThree';
import TabFour from './containers/NextTab/TabFour'
import TabFive from './containers/NextTab/TabFive'
import TabSix from './containers/NextTab/TabSix'
import TabSeven from './containers/NextTab/TabSeven'
import TabEight from './containers/NextTab/TabEight'
import A from './containers';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Intro" >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="TabOne" component={TabOne} />
      <Stack.Screen name="TabTwo" component={TabTwo} />
      <Stack.Screen name="TabThree" component={TabThree} />
      <Stack.Screen name="TabFour" component={TabFour} />
      <Stack.Screen name="TabFive" component={TabFive} />
      <Stack.Screen name="TabSix" component={TabSix} />
      <Stack.Screen name="TabSeven" component={TabSeven} />
      <Stack.Screen name="TabEight" component={TabEight} />
      <Stack.Screen name="A" component={A} />
    </Stack.Navigator>
  );
}

export default  MyStack;