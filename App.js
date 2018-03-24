import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Spinner } from '@shoutem/ui';
import { TabNavigator } from 'react-navigation';

export default class App extends Component {

	state = { signIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyD4-vcDLj2ZHEkxGsOdxSDhmU9Z8dlgXNI",
			authDomain: "my-awesome-project-7e2a1.firebaseapp.com",
			databaseURL: "https://my-awesome-project-7e2a1.firebaseio.com",
			projectId: "my-awesome-project-7e2a1",
			storageBucket: "my-awesome-project-7e2a1.appspot.com",
			messagingSenderId: "1047716563592"
		});

		firebase.auth().onAuthStateChanged((user) => {
			(user) ? this.setState({signIn: true}) : this.setState({signIn: false});
		});
	}

	checkSignIn() {
		switch (this.state.signIn) {
			case true:
				return <Explore/>
			case false:
				return <SignUp/>
			default:
				return <Spinner/> 
		}
	}
	render() {
		const MainNavigator = TabNavigator ({
			ExploreScreen: { screen: ExploreTab },
			InboxScreen: { screen: InboxTab },
			ProfileScreen: { screen: ProfileTab },
		}, {
			navigationOptions: {
	
			}
		});
		return (
			<MainNavigator/>
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
