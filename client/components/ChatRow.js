import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
  Body,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Container,
  List,
  ListItem
} from 'native-base';

const ChatRow = (props) => {
  const { name, motto, avatar } = props;

  return (
    <Container style={styles.container}>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{uri: avatar}}/>
            </Left>
            <Body>
              <Text>{name}</Text>
              <Text>{motto.substring(0, 15)}...</Text>
            </Body>
            <Right>
              <Text note>{Math.round(Math.random()*7)+5}:{Math.round(Math.random()*50)+10} pm</Text>
            </Right>
          </ListItem>
        </List>
    </Container>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    flex: 1,
    height: 80,
    justifyContent: 'flex-start'
  }
}

export default ChatRow;