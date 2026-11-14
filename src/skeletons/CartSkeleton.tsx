import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const CartSkeleton = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.title} />
          <View style={styles.metadata} />
        </View>
        <View style={styles.userId} />
      </View>

      <View style={styles.items}>
        {Array.from({ length: 3 }, (_, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.image} />
            <View style={styles.itemContent}>
              <View style={styles.productTitle} />
              <View style={styles.price} />
              <View style={styles.itemFooter}>
                <View style={styles.quantity} />
                <View style={styles.itemTotal} />
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.totalCard}>
        <View style={styles.totalLabel} />
        <View style={styles.total} />
      </View>
    </ScrollView>
  );
};

export default CartSkeleton;

const placeholderColor = "#d9d9d9";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8fafc",
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 28,
    width: 180,
  },
  metadata: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 14,
    marginTop: 10,
    width: 145,
  },
  userId: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 14,
    marginTop: 6,
    width: 60,
  },
  items: {
    gap: 12,
  },
  item: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    flexDirection: "row",
    padding: 12,
  },
  image: {
    backgroundColor: placeholderColor,
    borderRadius: 10,
    height: 110,
    width: 90,
  },
  itemContent: {
    flex: 1,
    marginLeft: 14,
  },
  productTitle: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 40,
    width: "90%",
  },
  price: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 14,
    marginTop: 10,
    width: "40%",
  },
  itemFooter: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  quantity: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 14,
    width: "40%",
  },
  itemTotal: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 18,
    width: "25%",
  },
  totalCard: {
    alignItems: "center",
    backgroundColor: "#cbd5e1",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 18,
  },
  totalLabel: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 20,
    width: 60,
  },
  total: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 24,
    width: 85,
  },
});