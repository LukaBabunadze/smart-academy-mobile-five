// import { Image } from "expo-image";
// import { useEffect, useState } from "react";
// import {
//   Button,
//   Dimensions,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableHighlight,
//   TouchableOpacity,
// } from "react-native";

// const windowHeight = Dimensions.get("window").height;
// const windowWidth = Dimensions.get("window").width;

// export default function Index() {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error(error));
//   }, []);

//   if (!products) {
//     return <Text>Loading products...</Text>;
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text>Welcome to React Native!</Text>
//       <Button title="ყიდვა" />

//       <Pressable
//         onPress={() => console.log("Pressed!")}
//         style={styles.pressable}
//       >
//         <Text style={styles.listItem}>Press Me</Text>
//       </Pressable>

//       <TouchableOpacity
//         onPress={() => console.log("TouchableOpacity Pressed!")}
//         activeOpacity={0.5}
//         style={styles.pressable}
//       >
//         <Text style={styles.listItem}>TouchableOpacity Press Me</Text>
//       </TouchableOpacity>

//       <TouchableHighlight
//         onPress={() => console.log("TouchableHighlight Pressed!")}
//         underlayColor="#DDDDDD"
//         style={styles.pressable}
//         activeOpacity={0.2}
//       >
//         <Text style={styles.listItem}>TouchableHighlight Press Me</Text>
//       </TouchableHighlight>

//       <TextInput
//         placeholder="Type here..."
//         style={styles.input}
//         keyboardType="default"
//         keyboardAppearance="dark"
//         autoFocus={false}
//         secureTextEntry={true}
//       />
//       <Image
//         source="https://reactnative.dev/img/tiny_logo.png"
//         style={styles.image}
//       />
//       <Text>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
//         blanditiis laboriosam necessitatibus iusto ipsam dolorem vel sunt unde
//         accusantium, eum eveniet inventore nemo voluptatibus nostrum, reiciendis
//         minima ea harum est! Non deleniti incidunt rerum fuga architecto
//         repellendus molestiae dignissimos corrupti inventore doloremque sunt
//         eos, exercitationem maiores, facilis odit temporibus natus laudantium!
//       </Text>
//       {products.map((product) => (
//         <Pressable>
//           <Text key={product.id} style={styles.listItem}>
//             {product.title}
//           </Text>
//         </Pressable>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 1.5 * windowHeight,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   listItem: {
//     fontSize: 16,
//     // paddingBottom: 8,
//     // paddingTop: 8,
//     // paddingLeft: 16,
//     // paddingRight: 16,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   pressable: {
//     backgroundColor: "#DDDDDD",
//     borderRadius: 4,
//     marginTop: 16,
//     width: "80%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginTop: 16,
//     width: "80%",
//     paddingHorizontal: 8,
//     // borderTopLeftRadius: 12,
//     // borderTopRightRadius: 12,
//     // borderBottomLeftRadius: 12,
//     // borderBottomRightRadius: 12,
//     borderRadius: 8,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginTop: 16,
//   },
// });


// import { Image } from "expo-image";
// import { useEffect, useState } from "react";
// import {
//   Dimensions,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
// } from "react-native";

// const windowHeight = Dimensions.get("window").height;
// const windowWidth = Dimensions.get("window").width;

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// };

// export default function Index() {
//   const [products, setProducts] = useState<Product[] | null>(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error(error));
//   }, []);

//   if (!products) {
//     return <Text>Loading products...</Text>;
//   }

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       horizontal={false}
//       pagingEnabled={false}
//     >
//       {products.map((product) => (
//         <Pressable style={styles.listItem} key={product.id}>
//           <Image source={product.image} style={styles.image} />
//           <Text key={product.id} style={styles.listTitle}>
//             {product.title}
//           </Text>
//           <Text>${product.price}</Text>
//           <Text>{product.description}</Text>
//           <Text>Category: {product.category}</Text>
//         </Pressable>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//   },
//   listItem: {
//     width: windowWidth * 0.9,
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: "#f0f0f0",
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   listTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     resizeMode: "contain",
//     marginBottom: 10,
//   },
// });

