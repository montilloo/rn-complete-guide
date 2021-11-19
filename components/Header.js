import React from "react";
import {StyleSheet, Text, View, Platform} from "react-native";
import Colors from "../constants/colors";

import DefaultStyles from "../constants/default-styles";

const Header = props => {
	return (
		<View style={styles.header}>
			<Text style={{ ...styles.headerTitle, ...DefaultStyles.title }}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
		justifyContent: "center",
		alignItems: 'center',
		borderBottomWidth: Platform.OS === "android" ? 0 : 1,
		borderBottomColor: Platform.OS === "android" ? "transparent" : "#CCC"
	},
	headerTitle: {
		color: Platform.OS === "android" ? 'white' : Colors.primary,
		fontSize: 18,
	}
});

export default Header;