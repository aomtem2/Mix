import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page11'
import Page2 from './Page22'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
  title: 'NICKNAME', header:null}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
  title: 'IMAGE',header:null}},
});


const navigator = createMaterialTopTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {
    title: 'NICKNAME'}},
    buttomPage2:{screen:stackPage2,navigationOptions: {
    title: 'IMAGE'}},
  });


export default createAppContainer(navigator);
