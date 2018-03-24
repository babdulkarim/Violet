import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListAvatar from '../components/ListAvatar';
export default class App extends Component {
  render() {
    return (
      <ListAvatar />
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