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
  Left,
  Icon,
  List,
  ListItem,
  Body
} from 'native-base';
import firebase from 'firebase';

export default class Profile extends Component {
  state = {
    email: '',
    name: '',
    status: '',
    year: 'first',
    major: '',
    motto: '',
    bio: '',
    avatar: '',
    hero: ''
  };

  componentWillMount() {
    var user = firebase.auth().currentUser;
    var resp = {};
    firebase.database().ref().child('users').orderByKey().equalTo(user.uid).once('value').then(snap => {;
      this.setState({
        email: snap.val()[user.uid]['email'],
        name: snap.val()[user.uid]['name'],
        status: snap.val()[user.uid]['status'],
        year: snap.val()[user.uid]['year'],
        major: snap.val()[user.uid]['major'],
        motto: snap.val()[user.uid]['motto'],
        bio: snap.val()[user.uid]['bio'],
        avatar: snap.val()[user.uid]['avatar'],
        hero: snap.val()[user.uid]['hero']
      });
    });
  }

  render() {
    const { email, name, status, year, major, motto, bio, avatar, hero} = this.state;

    return (
      <Content>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{uri: avatar}}/>
            </Left>
            <Body>
              <Text>{name}</Text>
              <Text>{year} Year</Text>
              <Text>{major}</Text>
              <Text>"{motto}"</Text>
            </Body>
          </ListItem>
          <ListItem style={{height: 200}}>
            <Image style={styles.imageContainer} source={{uri: hero}}/>
          </ListItem>
          <ListItem style={{flexDirection: 'column'}}>
            <Text style={styles.bioText}>Bio</Text>
            <Text>{bio}</Text>
          </ListItem>
        </List>
      </Content>
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

  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 4,
    width: '100%',
    height: '100%'
  },

  bioText: {
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginTop: -25,
    fontSize: 18

  }
});