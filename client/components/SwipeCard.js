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
} from 'native-base';

const SwipeCard = (props) => {
  const { name, year, avatar, hero, major, bio, motto, role } = props;

  return (
    <Card style={styles.cardContainer}>
      <CardItem>
        <Left>
          <Thumbnail source={{uri: avatar}} />
          <Body>
            <Text>{name}</Text>
            <Text>{year} year - {major}</Text>
            <Text>"{motto}"</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem style={styles.cardImage}>
        <Image style={styles.imageContainer} source={{uri: hero}}/>
      </CardItem>
      <CardItem style={styles.cardText}>
        <Text>{bio}</Text>
      </CardItem>
      <CardItem style={styles.cardButtons}>
        <Button transparent>
          <Icon name="heart" style={{ color: '#ED4A6A', fontSize: 32}} />
        </Button>
        <Button transparent>
          <Icon name="ios-person-outline" style={{ color: '#68095C', fontSize: 32}} />
        </Button>
        <Button transparent>
          <Icon name="ios-chatboxes-outline" style={{ color: '#007AFF', fontSize: 32}} />
        </Button>
      </CardItem>
    </Card>
  );
}

const styles = {
  cardContainer: {
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    height: 575
  },

  cardImage: {
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 4,
    height: 300
  },

  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 4,
    width: '100%',
    height: '100%',
  },

  cardText: {
    flexDirection: 'column',
    flex: 1
  },
  cardButtons: {
    justifyContent: 'space-around'
  }
}

export default SwipeCard;