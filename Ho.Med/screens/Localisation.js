import React, { useState, useEffect } from 'react';
import MapView, { Marker , Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,Platform ,SafeAreaView} from 'react-native';
import * as Location from 'expo-location';
import { Colors, Fonts, Sizes } from "../constant/styles";
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


const MyLocation = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState()

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLongitude(location.coords.longitude)
      setLatitude(location.coords.latitude)
    })();
  }, []);

    let text = 'waiting...';
    if (errorMsg) {
      text = errorMsg;
    }
    else if (location) {
      text = JSON.stringify(location); 
    }

    console.log(text);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
    <View style={styles.container}>
      <MapView style={styles.map} 
      region={{
        longitude: longitude,
        latitude: latitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider="google"
      >
        <Marker
        coordinate={{
          longitude: longitude,
          latitude: latitude
        }}>
          <Text>USER</Text>
          <Ionicons name="person-circle" size={30} color="bleu" />

        </Marker> 
        <Circle
          center={{
            longitude: longitude,
          latitude: latitude
          }}à
          radius={5000}
        />
        <Marker
        coordinate={{
          longitude: 10.179535715461565 ,
          latitude: 36.88146820239279 
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.180702559933698 ,
          latitude: 36.89956335605289 
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.219451630415131 ,
          latitude:  36.86990111747545 
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.199378918419225 ,
          latitude: 36.86884079399952 
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.265798701297873 ,
          latitude: 36.88103101623302
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.166332263487682 ,
          latitude: 36.8503442536553 
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.199009086009795 ,
          latitude: 36.850006905589076
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.198849513337217 ,
          latitude: 36.84809151097825 
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.255441314977794 ,
          latitude: 36.86310264620973 
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.257699573792456 ,
          latitude: 36.85542349719524
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.271249126569797 ,
          latitude: 36.85135775292978
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.282822702994943 ,
          latitude: 36.84661411138088
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.243867738442013 ,
          latitude: 36.84254789865419
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.230882750257704 ,
          latitude: 36.83373702931288
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.179507362224133 ,
          latitude: 36.83283329301609
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.180513490924131 ,
          latitude: 36.82223713615669
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
        <Marker
        coordinate={{
          longitude: 10.179826845461172 ,
          latitude: 36.81344208827283
        }}><MaterialCommunityIcons name="pharmacy" size={30} color="red" />
        </Marker>
      </MapView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MyLocation;