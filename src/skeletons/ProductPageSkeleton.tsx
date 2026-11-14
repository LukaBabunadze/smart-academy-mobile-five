import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

const ProductPageSkeleton = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 5 }, (_, index) => (
        <View key={index} style={styles.listItem}>
          <View style={styles.image} />
          <View style={styles.title} />
          <View style={styles.price} />
          <View style={styles.description} />
          <View style={styles.descriptionShort} />
          <View style={styles.category} />
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductPageSkeleton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  listItem: {
    width: Dimensions.get("window").width * 0.9,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  title: {
    width: "80%",
    height: 20,
    marginBottom: 10,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  price: {
    width: "25%",
    height: 16,
    marginBottom: 10,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  description: {
    width: "100%",
    height: 16,
    marginBottom: 6,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  descriptionShort: {
    width: "65%",
    height: 16,
    marginBottom: 10,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  category: {
    width: "45%",
    height: 16,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
});