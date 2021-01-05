import NavigationContainer from "./navigation/Container";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  FiraCode_300Light,
  FiraCode_400Regular,
  FiraCode_500Medium,
  FiraCode_600SemiBold,
  FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";

export default () => {
  let [fontsLoaded] = useFonts({
    FiraCode_300Light,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
    FiraCode_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <NavigationContainer />;
};
