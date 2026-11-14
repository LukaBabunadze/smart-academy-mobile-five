import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const ProfileSkeleton = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View style={styles.name} />
        <View style={styles.username} />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitle} />
        <View style={styles.row}>
          <View style={styles.label} />
          <View style={styles.value} />
        </View>
        <View style={styles.row}>
          <View style={styles.label} />
          <View style={styles.value} />
        </View>
        <View style={styles.row}>
          <View style={styles.label} />
          <View style={styles.valueShort} />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitle} />
        {Array.from({ length: 5 }, (_, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.label} />
            <View style={index === 4 ? styles.valueShort : styles.value} />
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitle} />
        {Array.from({ length: 3 }, (_, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.label} />
            <View style={index === 1 ? styles.valueLong : styles.value} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileSkeleton;

const placeholderColor = "#d9d9d9";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8fafc",
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    paddingVertical: 16,
  },
  avatar: {
    backgroundColor: placeholderColor,
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  name: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 26,
    marginTop: 16,
    width: "55%",
  },
  username: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 16,
    marginTop: 8,
    width: "30%",
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    marginTop: 16,
    padding: 18,
  },
  sectionTitle: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 20,
    marginBottom: 8,
    width: "55%",
  },
  row: {
    borderTopColor: "#e2e8f0",
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
  },
  label: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 13,
    marginBottom: 7,
    width: "25%",
  },
  value: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 16,
    width: "75%",
  },
  valueShort: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 16,
    width: "45%",
  },
  valueLong: {
    backgroundColor: placeholderColor,
    borderRadius: 4,
    height: 16,
    width: "90%",
  },
});