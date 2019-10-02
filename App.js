import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TopNavigation from './top/TopNavigation'
import SwitchNavigator from './mix/SwitchNavigator'
export default class App extends React.Component {
  render()
  {
    return (
      <View style={{flex:1}}>

        {/*<DrawerNavigation/>*/}
        <SwitchNavigator/>


      </View>
    );
  }
}
