import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, Row, Spinner, TextInput } from '@shoutem/ui'

export default class SignUp extends Component {
  state = {
    'email': '',
    'password': '',
    'loading': false
  }

  onSignUp() {
    const { email, password } = this.state;
    this.setState( { error: '', loading: true });

    const re = '\.edu$';
    if (!re.test(email)) {
      this.setState({ error: 'Please use a valid .edu email.' });
      return;
    }

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

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderSignUpButton() {
    if (this.state.loading) {
      return <Spinner/>;
    }

    return (
      <Button onPress={this.onSignUp.bind(this)}>Sign up</Button>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Row>
          <Text>Email</Text>
          <TextInput
            placeholder={'user@example.com'}
            onChangeText={email => this.setState({ email })}
          />
        </Row>
        <Row>
          <Text>Email</Text>
          <TextInput
            placeholder={'user@example.com'}
            onChangeText={password => this.setState({ password })}
          />
        </Row>
        <Row>
          {this.renderSignUpButton()}
        </Row>
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
