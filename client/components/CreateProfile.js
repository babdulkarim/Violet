import React, { Component } from 'react';
import { Keyboard, Image, ImageBackground, StyleSheet, View } from 'react-native';
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
  Segment,
  Right,
  Center
} from 'native-base';
import InputScrollView from 'react-native-input-scroll-view';

export default class CreateProfile extends Component {
  state = {
    name: '',
    year: 'first',
    major: '',
    motto: '',
    bio: '',
    error: '',
  };

  validate() {
    const { name } = this.state;
    
    return true;
  }

  onCreateProfile() {
    Keyboard.dismiss;
    const { name, year, major, motto, bio } = this.state;
    if (name == '') {
      this.setState({ error: 'Please enter a name.'});
      return;
    }
    
    this.setState({
      error: '',
    });

    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var ref = firebase.database().ref();
    var users = ref.child('users/' + uid);
    users.update({
      name: name,
      year: year,
      major: major,
      motto: motto,
      bio: bio,
      profileCreated: true
    });

    this.props.onCreate();
  }

  setFirst() {
    this.setState({ year: 'first' });
  }

  setSecond() {
    this.setState({ year: 'second' });
  }

  setThird() {
    this.setState({ year: 'third' });
  }

  setFourth() {
    this.setState({ year: 'fourth' });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Button transparent style={{width: '25%'}}></Button>
          <Title style={{paddingLeft: 10, paddingRight: 10}}>Create Profile</Title>
          <Button transparent style={{width: '25%'}} onPress={this.onCreateProfile.bind(this)}><Text>Create</Text></Button>
        </Header>
        <Content>
          <ImageBackground 
            style={styles.imageContainer}
            source={require('../../assets/images/createProfileHero.jpg')}>
            <Text style={styles.heroText}>Let's create your profile</Text>
          </ImageBackground>
          <Form>
            <Item inlineLabel>
              <Label>Name</Label>
              <Input 
              placeholder="Name or Nickname"
              onChangeText={name => this.setState({ name })}
              />
            </Item>
            <Item inlineLabel last>
              <Label>Year</Label>
              <Segment style={{backgroundColor: '#fff'}}>
                <Button style={styles.segmentButton} first active={this.state.year == 'first'} onPress={this.setFirst.bind(this)}><Text>1st</Text></Button>
                <Button style={styles.segmentButton} active={this.state.year == 'second'} onPress={this.setSecond.bind(this)}><Text>2nd</Text></Button>
                <Button style={styles.segmentButton} active={this.state.year == 'third'} onPress={this.setThird.bind(this)}><Text>3rd</Text></Button>
                <Button style={styles.segmentButton} last active={this.state.year == 'fourth'} onPress={this.setFourth.bind(this)}><Text>4th</Text></Button>
              </Segment>
            </Item>
            <Item inlineLabel>
              <Label>Major</Label>
              <Input 
              autoCapitalize="none"
              placeholder="Biomedical Engineering"
              onChangeText={major => this.setState({ major })}
              />
            </Item>
            <Item inlineLabel>
              <Label>Motto</Label>
              <Input 
              placeholder="You only live once"
              onChangeText={motto => this.setState({ motto })}
              />
            </Item>
            <Item floatingLabel >
                <Label>Bio</Label>
                <Input
                multiline
                numberOfLines={5}
                style={{height: 200, textAlignVertical: 'top', padding: 5}}
                onChangeText={bio => this.setState({ bio })}
                />
            </Item>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
              <Text style={styles.errorText}>{this.state.error}</Text>
            </View>
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
    justifyContent: 'space-between'
  },

  heroText: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    fontWeight: 'bold',
  },

  segmentButton: {
    paddingLeft: 8,
    paddingRight: 8
  },

  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200
  },

  errorText: {
    color: 'red',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }
});
