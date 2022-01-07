import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { TransitionPresets } from "react-navigation-stack";

class LandingPage extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.appLogo()}
            {this.registerText()}
            {this.SignupButton()}
            {this.SigninButton()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  registerText() {
    return (
      <Text
        style={{
          marginBottom: Sizes.fixPadding + 10.0,
          ...Fonts.primaryColor18Medium,
          textAlign: "center",
        }}
      >
        HoMed welcomes you
      </Text>
    );
  }

  SignupButton() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push("registerScreen")}
        activeOpacity={0.9}
        style={styles.SignupButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor19Medium }}>Sign up</Text>
      </TouchableOpacity>
    );
  }
  SigninButton() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push("login")}
        activeOpacity={0.9}
        style={styles.SigninButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor19Medium }}>Sign In</Text>
      </TouchableOpacity>
    );
  }

  appLogo() {
    return (
      <Image
        source={require("../assets/images/transparent-icon.png")}
        style={styles.appLogoStyle}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  SignupButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryColor,
    paddingVertical: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 10,
    borderRadius: Sizes.fixPadding - 5.0,
    marginTop: Sizes.fixPadding * 4.0,
  },
  SigninButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryColor,
    paddingVertical: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 10,
    borderRadius: Sizes.fixPadding - 5.0,
    marginTop: Sizes.fixPadding * 4.0,
  },
  appLogoStyle: {
    width: 200.0,
    height: 200.0,
    alignSelf: "center",
    marginBottom: Sizes.fixPadding,
    marginTop: Sizes.fixPadding * 3.0,
  },
});

LandingPage.navigationOptions = () => {
  return {
    header: () => null,
    ...TransitionPresets.SlideFromRightIOS,
  };
};

export default withNavigation(LandingPage);
