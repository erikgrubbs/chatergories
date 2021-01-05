import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import Category from "../screens/Category";

const Stack = createStackNavigator();
const CategoryStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen name="Category" component={Category} />
  </Stack.Navigator>
);

export default CategoryStackNavigator;
