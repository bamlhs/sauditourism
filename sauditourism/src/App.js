/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DashBoardScreen from './screens/DashBoardScreen/DashBoardScreen';
export default class App extends Component{
  render() {
    return (
      <DashBoardScreen />
    );
  }
}
