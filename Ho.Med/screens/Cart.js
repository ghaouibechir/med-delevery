import react from "react";
import {View ,Text , StyleSheet , SafeAreaView} from "react-native";
import { Colors, Fonts, Sizes } from "../constant/styles";
import * as Font from 'expo-font';

const Cart = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <View style={styles.container}>
            <Text>Cart component</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default Cart;