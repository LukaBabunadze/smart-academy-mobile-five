import AppButton from "@/components/appButton/AppButton";
import AppInput from "@/components/appInput/AppInput";
import AppTitle from "@/components/appTitle/AppTitle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const index = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("m38rmF$");

  const handleLogin = async () => {
    try {
      const reponse = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const result = await reponse.json();
      if (result.token) {
        await AsyncStorage.setItem("token", result.token);
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View>
      <AppTitle title="Login Page" />
      <AppInput
        placeholder="Enter Username..."
        onChangeText={(t) => setUsername(t)}
      />
      <AppInput
        placeholder="Enter Password..."
        secureTextEntry={true}
        onChangeText={(t) => setPassword(t)}
      />
      <AppButton title={"Log In"} onPress={handleLogin} />
      <Link href="/(auth)/register">go to register page</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    marginVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    width: "90%",
    alignSelf: "center",
  },
});
