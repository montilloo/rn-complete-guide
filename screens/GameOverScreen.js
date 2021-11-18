import React from "react";
import { Image, StyleSheet, Text, View} from "react-native";
import MainButton from '../components/MainButton';

import DefaultStyles from "../constants/default-styles";
import Colors from "../constants/colors";

const GameOverScreen = props => {
	return <View style={styles.screen}>
		<Text style={{...DefaultStyles.title}}>The Game is Over!</Text>
		<View style={styles.imageContainer}>
			<Image fadeDuration={1000}
						 source={{uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20200303ac%2F364%2Fw700h464%2F20200303%2F8072-iqfqmat8257183.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639817814&t=a57de22afa37469bb2fad37340699cf6"}}
						 style={styles.image} resizeMode="cover"/>
		</View>
		<View style={styles.resultContainer}>
			<Text style={{...DefaultStyles.bodyText, fontSize: 20, textAlign: 'center'}}>
				Your Phone needed {' '}
				<Text style={styles.highlight}>{props.roundsNumber}</Text>
				{' '}rounds guess the number{' '}
				<Text style={styles.highlight}>{props.userNumber}</Text>.
			</Text>
		</View>
		<MainButton onPress={props.onRestart}>NEW GAME</MainButton>
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
	},
	resultContainer: {
		marginHorizontal: 30,
		marginVertical: 15
	},
	highlight: {
		color: Colors.primary,
	}
});

export default GameOverScreen;