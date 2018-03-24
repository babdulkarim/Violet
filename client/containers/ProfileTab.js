import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Image } from 'react-native';
import { Container, Header, Content, Thumbnail, Title, Subtitle, Item, Label, Input } from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Biography' };
  }
  render() {
    return (
      <View style={styles.container}>
      <Header />
        <Content>
          <Thumbnail large square source={{uri: 'http://static3.uk.businessinsider.com/image/54c64fa2dd0895c51d8b4567/report-the-nfl-has-video-of-a-person-of-interest-taking-the-patriots-game-balls-into-another-room-before-afc-title-game.jpg'}} />
        </Content>

        <Item inlineLabel last>
            <Label>Enter Name</Label>
            <Input />
          </Item>   

        <Item inlineLabel last>
            <Label>Enter School</Label>
            <Input />
          </Item>

         <Item inlineLabel last>
            <Label>Enter School Year</Label>
            <Input />
          </Item>
        
        <Item inlineLabel last>
            <Label>Enter Big/Little Status</Label>
            <Input />
          </Item>

        <Item inlineLabel last>
            <Label>Enter Bio</Label>
            <Input />
          </Item>
        
          <Item inlineLabel last>
            <Label>Enter Interests/Goals/Intentions</Label>
            <Input />
          </Item>
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