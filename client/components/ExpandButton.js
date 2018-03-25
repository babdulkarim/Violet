import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon, Text } from 'native-base';

export default class ExpandButton extends Component {
  render() {
    return (
      <View>
        <Button iconTop light>
            <Icon name='arrow-top' />
        </Button>
      </View>
    );
  }
}