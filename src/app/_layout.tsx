import AppTitle from "@/components/appTitle/AppTitle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)");
      }
    } catch (error) {
      console.error("Error checking user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (loading) {
    return <AppTitle title="Loading..." />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
