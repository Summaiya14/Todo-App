import React from 'react';
import { AppRegistry, View, Text, TextInput } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Button from './src/components/Button';
import Input from './src/components/Input';


const App = () => {

	return <View> 
	<View style={styles.viewStyle} >
		<Header headerText='-NOTES-'/>
		<Footer>
		<Input 
		placeholder='>note'
		placeholderTextColor='white'
		/>
		</Footer>
	</View>

	<View>
	    <Button buttonText='+'/>
    </View>

	</View>

	

		
};

const styles= {
	viewStyle: {
		flex: 1
	}
};



AppRegistry.registerComponent('todo', () => App);