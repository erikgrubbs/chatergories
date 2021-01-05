import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "../screens/Post";
import TabNavigator from "./TabNavigator";
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Tabs"
      component={TabNavigator}
    />
    <Stack.Screen name="Post" component={Post} />
  </Stack.Navigator>
);

export default StackNavigator;
