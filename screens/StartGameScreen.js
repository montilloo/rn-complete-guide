import React from "react";
import {Button, Text, View, StyleSheet} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<Card style={styles.inputContainer}>
				<View style={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrent={false} keyboardType='number-pad'/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}><Button title='RESET' onPress={() => {
						}} color={Colors.accent}/></View>
						<View style={styles.button}><Button title='CONFIRM' onPress={() => {
						}} color={Colors.primary}/></View>
					</View>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create(
		{
			screen: {
				flex: 1,
				padding: 10,
				alignItems: 'center',
			},
			title: {
				fontSize: 20,
				marginVertical: 10
			},
			inputContainer: {
				width: 300,
				maxWidth: '80%',
				alignItems: 'center',
			},
			buttonContainer: {
				flexDirection: 'row',
				width: '100%',
				paddingHorizontal: 15,
				justifyContent: "space-between"
			},
			button: {
				width: 100
			},
			input: {
				width: 50,
				textAlign: "center"
			}
		}
	)
;

export default StartGameScreen;