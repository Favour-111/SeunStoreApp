import { Tabs } from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, // Smooth fade transition
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs">
        {() => (
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? "light"].default,
              headerShown: false,
            }}
          >
            <Tabs.Screen
              name="home"
              options={{
                title: "Home",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="home" size={20} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="orders"
              options={{
                title: "Cart",
                tabBarIcon: ({ color }) => (
                  <EvilIcons name="cart" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="products"
              options={{
                title: "Products",
                tabBarIcon: ({ color }) => (
                  <Fontisto name="shopping-bag-1" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="wishList"
              options={{
                title: "WishList",
                tabBarIcon: ({ color }) => (
                  <Feather name="bookmark" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: "Profile",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="user" size={24} color={color} />
                ),
              }}
            />
          </Tabs>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
