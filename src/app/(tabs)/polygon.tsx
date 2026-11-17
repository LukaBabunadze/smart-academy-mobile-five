// import * as Device from "expo-device";
// import { StyleSheet, Text, View } from "react-native";

// const polygon = () => {
//   return (
//     <View>
//       <Text>{Device.brand}</Text>
//       <Text>{Device.designName}</Text>
//       <Text>{Device.deviceName}</Text>
//       <Text>{Device.manufacturer}</Text>
//       <Text>{Device.deviceYearClass}</Text>
//       <Text>{Device.totalMemory}</Text>
//       <Text>{Device.osName}</Text>
//     </View>
//   );
// };

// export default polygon;

// const styles = StyleSheet.create({});

// import { Platform, StyleSheet, Text, View } from "react-native";
// import MapView, { Marker } from "react-native-maps";

// import * as Device from "expo-device";
// import * as Location from "expo-location";
// import { useEffect, useState } from "react";

// const polygon = () => {
//   const [location, setLocation] = useState<Location.LocationObject | null>(
//     null,
//   );

//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   const getCurrentLocation = async () => {
//     if (Platform.OS === "android" && !Device.isDevice) {
//       setErrorMsg(
//         "Oops, this will not work on Snack in an Android emulator. Try it on your device!",
//       );
//       return;
//     }

//     let { status } = await Location.requestForegroundPermissionsAsync();

//     if (status !== "granted") {
//       setErrorMsg(" Permission to access location was denied");
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     setLocation(location);
//   };

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   let text = " Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Your Coordinates{text}</Text>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: location?.coords.latitude ?? 37.78825,
//           longitude: location?.coords.longitude ?? -122.4324,
//           latitudeDelta: 0.5922,
//           longitudeDelta: 0.5421,
//         }}
//       >
//         <Marker
//           title="My Location"
//           description="This is my exact location"
//           coordinate={{
//             latitude: location?.coords.latitude ?? 37.78825,
//             longitude: location?.coords.longitude ?? -122.4324,
//           }}
//         />
//       </MapView>
//     </View>
//   );
// };

// export default polygon;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: "100%",
//     height: "50%",
//   },
// });


import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.youtube.com/watch?v=M_j1wwBLr7Q' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
