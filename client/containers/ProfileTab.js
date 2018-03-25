import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Image } from 'react-native';
import { Container, Header, Content, Thumbnail, Title, Subtitle, Item, Label, Input } from 'native-base';
import Profile from '../components/Profile.js';

export default class ProfileTab extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Title style={{color: "#68095C"}}>Profile</Title>
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