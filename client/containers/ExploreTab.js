import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from '../components/Swipe';
export default class App extends Component {
  render() {
    return (
      <Swipe />
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
