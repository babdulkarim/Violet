import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class SignUp extends Component {
  state = {
    'email': '',
    'password': '',
    'loading': false
  }

  onSignUp() {
    const { email, password } = this.state;
    
    this.setState({
      error: '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onSignUpSuccess.bind(this))
          .catch(this.onSignUpFail.bind(this));
      })
  }

  onSignUpFail() {
    this.setState({
      error: 'User already exists',
      loading: false}
    );
  }

  onSignUpSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  render() {
    return (
      <Container>
      <Header />
      <Content>
        <Form>
          <Item inlineLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item inlineLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Content>
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
