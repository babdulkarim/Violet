import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
import Navigation from './client/containers/Navigation'
import SignUp from './client/components/SignUp';
import CreateProfile from './client/components/CreateProfile'
import { Container, Spinner } from 'native-base';
import Profile from './client/components/Profile';

console.disableYellowBox = true;
export default class App extends Component {
	state = { signIn: null, profileCreated: 'wait'};

	async componentWillMount() {
		await Expo.Font.loadAsync({
			'Roboto': require('native-base/Fonts/Roboto.ttf'),
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
			'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
		  });

		const firebaseConfig = {
			apiKey: "AIzaSyD55I9qJm1_R8FzX_GZLmJuDa2byo1scBo",
			authDomain: "violet-5f0ae.firebaseapp.com",
			databaseURL: "https://violet-5f0ae.firebaseio.com",
			projectId: "violet-5f0ae",
			storageBucket: "gs://violet-5f0ae.appspot.com ",
			messagingSenderId: "779742191118"
		};
		const firebaseApp = firebase.initializeApp(firebaseConfig);

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ signIn: true, });
				firebase.database().ref('users/' + user.uid).once('value').then((snap) => {
					this.setState({ profileCreated: snap.val().profileCreated } )
				});
			} else {
				this.setState({ signIn: false })
			}
		});
	}

	setProfileCreated() {
		this.setState({ profileCreated: true });
	}

	checkSignIn() {
		switch (this.state.signIn) {
			case true:
				if (!this.state.profileCreated) {
					return <CreateProfile onCreate={this.setProfileCreated.bind(this)} />
				}
				return <Navigation/>
			case false:
				return <SignUp/>
			default:
				return (
						<Spinner style={{alignSelf: 'center', flex: 1}} color="grey"/> 
				);
		}
	}

	render() {		
		return (
			<Container>
				{this.checkSignIn()}
			</Container>
		);
	}
}
