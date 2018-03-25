import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import firebase from 'firebase';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../assets/images/signUpHero.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../../assets/images/signUpHero.jpg'),
  },
  
];
export default class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = { firebaseUsers: {} };
  }
  componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    var users = [];
    
    firebase.database().ref('users').orderByKey().on('value', (snapshot) => {
      snapshot.forEach((child) => {
        users.push({
          email: child.val().email,
        });
      });
        this.setState({firebaseUsers: users})
      }, error => console.log(error));
    };

  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={this.state.firebaseUsers}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    {/* <Thumbnail source={item.image} /> */}
                    <Body>
                      {/* <Text>{item.text}</Text> */}
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.email}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}