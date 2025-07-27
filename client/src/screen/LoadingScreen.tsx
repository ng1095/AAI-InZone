import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
const navigation = useNavigation<any>();

useEffect(() => {
// Simulate loading then navigate
setTimeout(() => {
    navigation.replace('Getstarted'); // Replace with your main screen
}, 4000); // 3 seconds
}, []);

return (
<View style={styles.container}>
    <LottieView
    source={require('../assets/loader.json')}
    autoPlay
    loop
    style={styles.animation}
    />
</View>
);
};

export default LoadingScreen;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({

container: {
flex: 1,
// backgroundColor: '#00ADEF', // Similar to Internshala blue
justifyContent: 'center',
alignItems: 'center',
},

animation: {
width: width * 0.5,
height: width * 0.5,
},

});