import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image,Typography } from '@shoutem/ui';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          styleName = "medium-avatar"
          source
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
        />
        <Title>Name</Title>
        <Subtitle>School</Subtitle>
        <Subtitle>Year</Subtitle>
        <Subtitle>Big/Little Status</Subtitle>
        
        <Text>Biography</Text>
        <Text>Interest/Intention/Goals</Text>
      </View>
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