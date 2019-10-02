import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopNavigator from './TopNavigator'
import BottomNavigator from './BottomNavigator'

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:10}}>
          <TopNavigator/>
        </View>
    );
  }
}
