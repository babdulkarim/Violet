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
              <Text>{motto}</Text>
            </Body>
            <Right>
              <Text note>11:02 am</Text>
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
    height: 100,
    justifyContent: 'flex-start'
  }
}

export default ChatRow;