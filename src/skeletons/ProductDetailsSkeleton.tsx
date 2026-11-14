import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const ProductDetailsSkeleton = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.image} />
      <View style={styles.content}>
        <View style={styles.category} />
        <View style={styles.title} />
        <View style={styles.price} />
        <View style={styles.rating} />
        <View style={styles.description} />
        <View style={styles.descriptionShort} />
      </View>
    </ScrollView>
  );
};

export default ProductDetailsSkeleton;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 32,
    backgroundColor: "#f8fafc",
  },
  image: {
    width: "100%",
    height: 320,
    marginTop: 16,
    backgroundColor: "#d9d9d9",
  },
  content: {
    padding: 20,
  },
  category: {
    width: "35%",
    height: 16,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  title: {
    width: "85%",
    height: 32,
    marginTop: 12,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  price: {
    width: "30%",
    height: 24,
    marginTop: 20,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  rating: {
    width: "40%",
    height: 18,
    marginTop: 14,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  description: {
    width: "100%",
    height: 18,
    marginTop: 28,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  descriptionShort: {
    width: "70%",
    height: 18,
    marginTop: 8,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
});