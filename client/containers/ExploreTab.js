import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from '../components/Swipe';
import Switcher from '../components/Switcher';
export default class App extends Component {
  render() {
    return (
        <Switcher />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
