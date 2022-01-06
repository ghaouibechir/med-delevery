import react from "react";
import {View ,Text , StyleSheet} from "react-native";

const Localisation = () => {
    return (
        <View style={styles.container}>
            <Text>Localisation component</Text>
        </View>
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

export default Localisation;