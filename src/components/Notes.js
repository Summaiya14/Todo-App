import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import Footer from './Footer';
import Input from './Input';
import Button from './Button';
import DelButton from './DelButton';

const Notes = () => {

const [todo, setTodo] = useState([{text: 'create app', key: '1'}]);
const [text, setText] = useState('');

const onButtonPress = (text) => {
if(text.length > 0){
	setTodo((prevTodo) => {
	return [
	{text: text, key: Math.random().toString() },
	...prevTodo
	];
	});
	}else {
		Alert.alert('OOPS!', 'Type Something', [
		    {text: 'Ok', onPress: () => console.log('alert closed')}
		]);
	}
}


const pressDelete = (key) => {
	setTodo((prevTodo) => {
		return prevTodo.filter(todo => todo.key != key);
	});
}

	return <View> 
	<View>
		<Footer>
		<Input 
		placeholder='>note'
		placeholderTextColor='white'
	    value={text}
		onChangeText={(newValue) => setText(newValue)}
		/>
		</Footer>
	</View>

	<View>
	<FlatList
	showsVerticalScrollIndicator={false}
	data={todo}
	renderItem={({item}) => (
	<TouchableOpacity onPress={() => pressDelete(item.key)}>
		<Text style={styles.listStyle}>{item.text}</Text>
	</TouchableOpacity>
	)}
	/>
	

	<Button 
	buttonText='+'
    onPress={() => onButtonPress(text)}
	/>
	</View>

	</View>

};

const styles={
	listStyle: {
		padding: 16,
		borderColor: '#348ba5',
		borderWidth: 1,
		borderStyle: 'dashed',
		marginTop: 12,
		borderRadius: 10,
		marginRight: 12,
		marginLeft: 12,


	}
};

export default Notes;