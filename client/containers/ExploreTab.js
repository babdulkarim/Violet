import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import firebase from 'firebase';
import SwipeCard from '../components/SwipeCard';
import {
  Content,
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Title
} from 'native-base';

export default class ExploreTab extends Component {
  constructor(props) {
    super(props);
    this.state = { firebaseUsers: {} };
  }
  componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    var users = [];
    
    firebase.database().ref('users').orderByValue().on('value', (snapshot) => {
      snapshot.forEach((child) => {
        users.push({
          name: child.val().name,
          year: child.val().year,
          avatar: child.val().avatar,
          major: child.val().major,
          bio: child.val().bio,
          motto: child.val().motto,
          hero: child.val().hero
        });
      });
        this.setState({firebaseUsers: users});
    });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Title style={{color: "#68095C"}}>Violet</Title>
        </Header>
        <Content>
          <DeckSwiper
            dataSource={this.state.firebaseUsers}
            renderItem={item =>
              <SwipeCard
                name={item.name}
                year={item.year}
                major={item.major}
                avatar={item.avatar}
                hero={item.hero}
                bio={item.bio}
                motto={item.motto}
                status={item.status}
              />
            }
          />
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