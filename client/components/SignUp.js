import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { 
  Container, 
  Header,
  Title,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Spinner,
  Segment
} from 'native-base';

export default class SignUp extends Component {
  state = { 'email': '', 'password': '', 'role': 'little', 'loading': false };

  // validate email then password
  validate() {
    const { email, password } = this.state;

    var re = /.*@virginia.edu$/i;
    if (!re.test(email)) {
      this.setState({
        error: 'Please enter an @virginia.edu email.',
        loading: false
      });
      return false;
    }
    if (!(password.length >= 8) ) {
      this.setState({
        error: 'Please enter a password of at least 8 characters.',
        loading: false
      });
      return false;
    }
    return true;
  }

  onSignUp() {
    this.validate.bind(this);
    var validated = this.validate();
    if (!validated) {
      return;
    }

    const { email, password } = this.state;
    
    this.setState({
      error: '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onSignInSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.writeUserData.bind(this))
          .catch(this.onSignUpFail.bind(this));
      })
  }

  onSignInSuccess() {
    this.setState({
      email: '',
      password: '',
      role: 'little',
      loading: false
    })
  }

  onSignUpFail() {
    const {email, password } = this.state;
    this.setState({
      error: 'Incorrect Password. User already exists.',
      loading: false
    });
  }

  writeUserData() {
    const { email, role } = this.state;
    var user = firebase.auth().currentUser;
    var uid  = user.uid;
    var ref = firebase.database().ref();
    ref.child('users/' + uid).set({
      email: email,
      role: role,
      createdProfile: false
    });

    this.setState({
      email: '',
      password: '',
      loading:''
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner color="grey"/>
    }
    return (
      <Button 
        style={styles.buttonContainer} 
        block
        info
        onPress={this.onSignUp.bind(this)}>
          <Text>Sign In</Text>
      </Button>
    );
  }

  setBig() {
    this.setState({ role: 'big' });
  }

  setLittle() {
    this.setState({ role: 'little' });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Title>Sign Up / Log In</Title>
        </Header>
        <Content>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/signUpHero.jpg')}
            />
          </View>
          <Form>
            <Item inlineLabel>
              <Label>Email</Label>
              <Input 
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="you@virginia.edu"
              onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input 
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Item style={{alignItems: 'center', justifyContent: 'center'}}>
              <Label>I am a: </Label>
              <Segment style={{backgroundColor: '#fff'}}>
                <Button first active={this.state.role == 'big'} onPress={this.setBig.bind(this)}><Text>Big</Text></Button>
                <Button last active={this.state.role == 'little'} onPress={this.setLittle.bind(this)}><Text>Little</Text></Button>
              </Segment>
            </Item>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.errorText}>{this.state.error}</Text>
            </View>
            {this.renderButton()}
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 4,
  },

  image: {
    flex: 1,
    width: null,
    height: 200, 
  },

  buttonContainer: {
    margin: 5,
  },

  errorText: {
    color: 'red',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }
});
