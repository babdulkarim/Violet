import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import ListAvatar from '../components/ListAvatar';

export default class App extends Component {
  render() {
    return (
      <Container>
      <ListAvatar />
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search a Name" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    </Container>

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