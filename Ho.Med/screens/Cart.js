import react from "react";
import { View, Text, StyleSheet } from "react-native";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart componentssss</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;
