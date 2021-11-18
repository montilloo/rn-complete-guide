import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import DefaultStyles from "../constants/default-styles";

const GameOverScreen = props => {
	return <View style={styles.screen}>
		<Text style={{ ...DefaultStyles.title }}>The Game is Over!</Text>
		<View style={styles.imageContainer}>
			<Image source={ require("../assets/success.png")} style={styles.image} resizeMode="cover" />
		</View>
		<Text style={{ ...DefaultStyles.bodyText }}>Rounds Number: { props.roundsNumber }</Text>
		<Text style={{ ...DefaultStyles.bodyText }}>User Number: { props.userNumber }</Text>
		<Button title="NEW GAME" onPress={ props.onRestart} />
	</View>
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: 'black',
		marginVertical: 30,
		overflow: "hidden"
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default GameOverScreen;