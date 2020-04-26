import React from 'react';
import { AppRegistry, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Button from './src/components/Button';
import Input from './src/components/Input';
import Notes from './src/components/Notes';

const App = () => {

	return ( 
	<TouchableWithoutFeedback onPress={() => {
	Keyboard.dismiss();
	console.log('dismiss')
	}} >
	<View style={styles.viewStyle} >
		<Header headerText='-TODO APP-'/>
		<Notes />
	</View>
	</TouchableWithoutFeedback>

	
);
	
};

const styles= {
	viewStyle: {
		flex: 1
	}
};



AppRegistry.registerComponent('todo', () => App);