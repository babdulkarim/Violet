import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
import Navigation from './client/containers/Navigation'
import SignUp from './client/components/SignUp';
import { Container, Spinner } from 'native-base';

export default class App extends Component {
	state = { signIn: null, profileCreated: false, userEmail: '' };

	async componentWillMount() {
		await Expo.Font.loadAsync({
			'Roboto': require('native-base/Fonts/Roboto.ttf'),
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
			'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
		  });
		// firebase.initializeApp({
		// 	apiKey: "AIzaSyD55I9qJm1_R8FzX_GZLmJuDa2byo1scBo",
		// 	authDomain: "violet-5f0ae.firebaseapp.com",
		// 	databaseURL: "https://violet-5f0ae.firebaseio.com",
		// 	projectId: "violet-5f0ae",
		// 	storageBucket: "",
		// 	messagingSenderId: "779742191118"
		//   });
		const firebaseConfig = {
			apiKey: "AIzaSyD55I9qJm1_R8FzX_GZLmJuDa2byo1scBo",
			authDomain: "violet-5f0ae.firebaseapp.com",
			databaseURL: "https://violet-5f0ae.firebaseio.com",
			projectId: "violet-5f0ae",
			storageBucket: "",
			messagingSenderId: "779742191118"
		};
		const firebaseApp = firebase.initializeApp(firebaseConfig);
		
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ signIn: true });
				// const users = firebase.database().ref().child('users');
				// users.orderByChild('email').equalTo(user.email).once('value').then(snapshot => {
				// 	this.setState({
				// 		profileCreated: snapshot.child('profileCreated').val(),
				// 		userEmail: user.email;
				// 	});
				// })
			} else {
				this.setState({ signIn: false })
			}
		});
	}

	checkSignIn() {
		switch (this.state.signIn) {
			case true:
				// if (!this.state.profileCreated) {
				// 	return <CreateProfile email=this.state.userEmail />
				// }
				return <Navigation/>
			case false:
				return <SignUp/>
			default:
				return (
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
						<Spinner color="grey"/> 
					</View>
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
