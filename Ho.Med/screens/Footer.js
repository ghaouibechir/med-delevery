import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-ico";
import { useNavigation } from "@react-navigation/native";
export default function Footer() {
    const navigation=useNavigation()
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
              width="40"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
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
              width="40"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
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
              width="40"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
              }}
            >
              Notification
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate("About");
            }}
            style={styles.IconBehave}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="round-eyeglasses"
              group="stylish"
              height="40"
              width="40"
              color="#10857F"
            />
            <Text
              style={{
                alignItems: "center",
              }}
            >
              About-Us
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
 
    NavContainer: {
      position: "absolute",
      alignItems: "center",
      bottom: 20,
    },
    NavBar: {
      flexDirection: "row",
      backgroundColor: "#eee",
  
      width: "90%",
      justifyContent: "space-evenly",
      borderRadius: 40,
    },
    IconBehave: {
      padding: 14,
    },
  });
  
