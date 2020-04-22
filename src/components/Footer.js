import React from 'react';
import { Text, View } from 'react-native';

const Footer = (props) => {
return <View style={styles.viewStyle}>
{props.children}
</View>
};

const styles = {

	viewStyle: {
		backgroundColor: '#333333',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
		top: 550

	}
};


export default Footer;
