import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon, Text } from 'native-base';

export default class ExpandButton extends Component {
  render() {
    return (
      <View>
        <Button iconTop light style={{backgroundColor: '#fff'}}>
            <Icon 
            name='arrow-up'
            style={{color: '#8d3482'}}
            />
        </Button>
      </View>
    );
  }
}