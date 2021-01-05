import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import CategoryStackNavigator from "./CategoryStackNavigator";
import Feed from "../screens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        title: "Feed",
        tabBarIcon: ({ ...props }) => (
          <MaterialIcons {...props} name="dynamic-feed" />
        ),
      }}
      name="FeedTab"
      component={Feed}
    />
    <Tab.Screen
      options={{
        title: "Categories",
        tabBarIcon: ({ ...props }) => (
          <MaterialIcons {...props} name="category" />
        ),
      }}
      name="CategoriesTab"
      component={CategoryStackNavigator}
    />
  </Tab.Navigator>
);

export default TabNavigator;
