import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
  title: 'FirstName'}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
  title: 'StudentID'}},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Page3,navigationOptions: {
  title: 'Page3',header:null}},
});

const navigator = createBottomTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {
    title: 'FirstName'}},
    buttomPage2:{screen:stackPage2,navigationOptions: {
    title: 'StudentID'}},
    buttomPage3:{screen:stackPage3,navigationOptions: {
    title: 'ETC'}},
})


export default createAppContainer(navigator);
