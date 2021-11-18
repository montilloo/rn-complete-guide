import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import DefaultStyles from "../constants/default-styles";

const GameOverScreen = props => {
	return <View style={styles.screen}>
		<Text style={{ ...DefaultStyles.title }}>The Game is Over!</Text>
		<Image source={ require("../assets/success.png")} />
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
	}
});

export default GameOverScreen;