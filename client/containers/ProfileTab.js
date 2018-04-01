import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Title,
  Subtitle,
  Item,
  Label,
  Input,
  Left,
  Right,
  Body,
  Button
} from 'native-base';
import Profile from '../components/Profile.js';
import firebase from 'firebase';

export default class ProfileTab extends Component {
  signOut(){
    firebase.auth().signOut();
  }
  
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Text>Settings</Text>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#68095C"}}>Profile</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.signOut}>
              <Text>Log Out</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Profile/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});