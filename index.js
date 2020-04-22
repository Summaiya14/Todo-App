import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Button from './src/components/Button';


const App = () => {

	return <View> 
	<View style={styles.viewStyle} >
		<Header headerText='-NOTES-'/>
		<Footer />
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