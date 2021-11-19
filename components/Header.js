import React from "react";
import {StyleSheet, Text, View, Platform} from "react-native";
import Colors from "../constants/colors";

import DefaultStyles from "../constants/default-styles";

const Header = props => {
	return (
		<View style={{ ...styles.headerBase, ...Platform.select({
				ios: styles.headerIOS,
				android: styles.headerAndroid
			})}}>
			<Text style={{ ...styles.headerTitle, ...DefaultStyles.title }}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	headerBase: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		justifyContent: "center",
		alignItems: 'center'
	},
	headerIOS: {
		backgroundColor:"white",
		borderBottomWidth: 1,
		borderBottomColor: "#CCC"
	},
	headerAndroid: {
		backgroundColor: Colors.primary,
	},
	headerTitle: {
		color: Platform.OS === "android" ? 'white' : Colors.primary,
		fontSize: 18,
	}
});

export default Header;