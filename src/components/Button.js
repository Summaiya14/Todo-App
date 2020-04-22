import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = (props) => {
return (
<TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
<Text style={styles.textStyle}>{props.buttonText}</Text>
</TouchableOpacity>
);
};

const styles = {
	buttonStyle: {
	    position: 'absolute',
		right: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#348ba5',
		borderRadius: 50,
		elevation: 8,
		zIndex: 11,
		width: 60,
		height: 60,
		top: 540
	},

	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 25,
		fontWeight: '600'
	}
};

export default Button;