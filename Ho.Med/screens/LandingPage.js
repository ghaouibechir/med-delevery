import React, { Component } from "react";
 import { ImageBackground, StyleSheet, Text, View ,TouchableOpacity ,Button } from "react-native";
 import { Sizes } from "../constant/styles";

 import { withNavigation } from "react-navigation";

class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../assets/images/LAND.png')} resizeMode="cover" style={styles.backgroundImage}>
            <Text style={styles.text}> Pharmacy at your finger tips </Text>
            </ImageBackground>
            {this.exploreButton()}
         </View>
    )
  }
  exploreButton(){
    return(
    <TouchableOpacity
            onPress={() =>{ this.props.navigation.push("registerScreen")}}
             activeOpacity={0.9}
              style={styles.exploreButton}
            >
            <Text style={styles.text2}> Explore</Text>      
            </TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c6dee4',
    
},
    backgroundImage:{
    width:600,
    height:500,
    marginTop: 200,
    marginLeft:40,
    

  },
 text:{
  //  fontFamily:"Helvetica Neue",
    fontSize:20,
   lineHeight:28,
   color:'#29aba7',
   marginTop: 90,
   
   marginLeft:20,
 },
 text2:{
   color:"#c7e2eb"
 },
 exploreButton:{
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2aada7",
  paddingVertical: 10,
   marginHorizontal: 155,
   borderRadius: 20,
    
 }});
 LandingPage.navigationOptions = () => {
  return {
    header: () => null,
    ...TransitionPresets.SlideFromRightIOS,
  };
}
  export default withNavigation(LandingPage)