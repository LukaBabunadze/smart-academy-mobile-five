import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

type TabBarIconProps = {
  color: any;
  focused: boolean;
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        animation: "shift",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "პროდუქტები",
          tabBarLabel: "მარკეტი",
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <AntDesign name="shop" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarLabel: "კარტა",
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <AntDesign
              name="shopping-cart"
              size={focused ? 24 : 20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "პროფილი",
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <Feather name="user" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="polygon"
        options={{
          title: "Polygon",
          tabBarLabel: "პოლიგონი",
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <Feather name="user" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
