import React, {useEffect, useState} from "react";
import {
	Alert,
	Button,
	Dimensions,
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from '../components/MainButton';

import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const StartGameScreen = props => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();
	const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);
	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{
				text: 'Okay',
				onPress: resetInputHandler,
				style: "destructive"
			}])
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	useEffect(() => {
		const updateLayout = () => {
			setButtonWidth(Dimensions.get("window").width / 4);
		};
		Dimensions.addEventListener("change", updateLayout);
		return Dimensions.removeEventListener("change", updateLayout);
	});

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (<Card style={styles.summaryContainer}>
			<Text>You selected:</Text>
			<NumberContainer>{selectedNumber}</NumberContainer>
			<MainButton onPress={() => props.onStartGame(selectedNumber)}>
				START GAME
			</MainButton>
		</Card>)
	}

	return (
		<ScrollView>
			<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
				<TouchableWithoutFeedback onPress={() => {
					Keyboard.dismiss()
				}}>
					<View style={styles.screen}>
						<Text style={{...styles.title, ...DefaultStyles.title}}>Start a New Game!</Text>
						<Card style={styles.inputContainer}>
							<View style={styles.inputContainer}>
								<Text style={{...DefaultStyles.bodyText}}>Select a Number</Text>
								<Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false}
											 keyboardType='number-pad' maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
								<View style={styles.buttonContainer}>
									<View style={{ width: buttonWidth }}><Button title='RESET' onPress={resetInputHandler}
																											color={Colors.accent}/></View>
									<View style={{ width: buttonWidth }}><Button title='CONFIRM' onPress={confirmInputHandler}
																											color={Colors.primary}/></View>
								</View>
							</View>
						</Card>
						{confirmedOutput}
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ScrollView>
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
				width: "80%",
				maxWidth: '95%',
				minWidth: 300,
				alignItems: 'center',
			},
			buttonContainer: {
				flexDirection: 'row',
				width: '100%',
				paddingHorizontal: 15,
				justifyContent: "space-between"
			},
			input: {
				width: 50,
				textAlign: "center"
			},
			summaryContainer: {
				marginTop: 20,
				alignItems: "center"
			}
		}
	)
;

export default StartGameScreen;