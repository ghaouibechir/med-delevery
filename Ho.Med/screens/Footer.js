import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-ico";
import { useNavigation } from "@react-navigation/native";
export default function Footer() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            style={styles.IconBehave}
            onPress={() => navigation.navigate("navbar")}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="home"
              group="universalicons"
              height="40"
              width="30"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
                right: 3,
              }}
            >
              Home
            </Text>
          </Pressable>

          <Pressable
            style={styles.IconBehave}
            // onPress={() => console.log("Reminder")}
            onPress={() => {
              navigation.navigate("Reminder");
            }}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="calendar-with-spring-binder-and-date-blocks"
              group="font-awesome"
              height="40"
              width="30"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
                right: 12,
              }}
            >
              Reminder
            </Text>
          </Pressable>

          <Pressable
            style={styles.IconBehave}
            onPress={() => navigation.navigate("Notification")}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="notification"
              group="miscellaneous"
              height="40"
              width="30"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
                right: 15,
              }}
            >
              Notification
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate("Profile");
            }}
            style={styles.IconBehave}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="profile"
              group="basic"
              height="40"
              width="30"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
                right: 5,
              }}
            >
              Profile
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  NavContainer: {
    width: 370,
    height: 60,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#eee",

    justifyContent: "space-evenly",
  },
  IconBehave: {
    padding: 20,
    bottom: 20,
  },
});
