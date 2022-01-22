import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LottieView from 'lottie-react-native'

export default function Aploder({ navigation }) {
    return (

        <View style={styles.container}>
            <LottieView source={require('../assets/loading/med.json')} autoPlay />
            <Button
                title="pay"
                onPress={() => navigation.navigate("Paiment")}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
