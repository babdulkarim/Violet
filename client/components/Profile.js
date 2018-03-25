import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Image } from 'react-native';
import { 
  Button,
  Container,
  Header,
  Content,
  Thumbnail,
  Title,
  Subtitle,
  Item,
  Label,
  Input,
  Icon
} from 'native-base';
import firebase from 'firebase';

export default class Profile extends Component {
  state = {
    email: '',
    name: '',
    status: '',
    year: 'first',
    birthday: '',
    motto: '',
    bio: '',
  };

  componentWillMount() {
    if (firebase.apps.length) {
      const users = firebase.database().ref().child('users');
      users.orderByChild('email').equalTo(this.props.email).once('value').then(snapshot => {
        this.setState({
          email: this.props.email,
          name: snapshot.child('name').val(),
          status: snapshot.child('status').val(),
          year: snapshot.child('year').val(),
          birthday: snapshot.child('birthday').val(),
          motto: snapshot.child('motto').val(),
          bio: snapshot.child('bio').val()
        });
      });
    }
  }

  render() {
    const { email, name, status, year, birthday, motto, bio } = this.state;

    return (
      <Container style={styles.container}>
        <Header>
          <Button iconLeft transparent>
            <Icon name='arrow-back' />
          </Button>
          <Title>{name}'s Profile</Title>
        </Header>
        <Content>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'column'
  },

  avatar: {

  }
});