import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./PostStackNavigator";

const NavContainer = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default NavContainer;
