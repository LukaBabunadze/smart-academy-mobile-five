import { User } from "@/types/types";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProfileSkeleton from "../../skeletons/ProfileSkeleton";

const profile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  if (!user) {
    return <ProfileSkeleton />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Website</Text>
          <Text style={styles.value}>{user.website}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Street</Text>
          <Text style={styles.value}>{user.address.street}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Suite</Text>
          <Text style={styles.value}>{user.address.suite}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>City</Text>
          <Text style={styles.value}>{user.address.city}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Zip code</Text>
          <Text style={styles.value}>{user.address.zipcode}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Coordinates</Text>
          <Text style={styles.value}>
            {user.address.geo.lat}, {user.address.geo.lng}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{user.company.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Catch phrase</Text>
          <Text style={styles.value}>{user.company.catchPhrase}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Business focus</Text>
          <Text style={styles.value}>{user.company.bs}</Text>
        </View>
      </View>

      <View style={styles.meta}>
        <Text style={styles.metaText}>User ID: {user.id}</Text>
      </View>
    </ScrollView>
  );
};

export default profile;

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
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 40,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "700",
  },
  name: {
    color: "#0f172a",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 12,
  },
  username: {
    color: "#64748b",
    fontSize: 16,
    marginTop: 4,
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    marginTop: 16,
    padding: 18,
  },
  sectionTitle: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  infoRow: {
    borderTopColor: "#e2e8f0",
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
  },
  label: {
    color: "#64748b",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },
  value: {
    color: "#1e293b",
    fontSize: 16,
    lineHeight: 22,
  },
  meta: {
    alignItems: "center",
    paddingVertical: 20,
  },
  metaText: {
    color: "#94a3b8",
    fontSize: 13,
  },
});
