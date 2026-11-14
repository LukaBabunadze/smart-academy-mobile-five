import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "flip" }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Sign In",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: true,
          headerTitle: "Register",
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
};

export default _layout;
