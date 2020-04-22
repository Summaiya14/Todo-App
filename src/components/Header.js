import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
const {textStyle, viewStyle} = styles;
	return <View style={viewStyle}>
		<Text style={textStyle}>{props.headerText}</Text>
				
	</View>
};

const styles = {
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	viewStyle: {
		backgroundColor: '#348ba5',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
		
	}
};

export default Header;
