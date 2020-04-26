import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = (props) => {
return <View style={styles.containerStyle}>
<TextInput
style={styles.inputStyle}
autoCorrect={false}
autoCapitalize="none"
placeholder={props.placeholder}
placeholderTextColor={props.placeholderTextColor}
value={props.value}
onChangeText={props.onChangeText}
/>
</View>

};

const styles = {
	inputStyle: {
		color: '#fff',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
		
	}
};

export default Input;