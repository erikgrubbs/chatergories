import React from "react";
import StyledText from "../components/StyledText";
import { Text, SafeAreaView, Pressable } from "react-native";

const Categories = ({ navigation }) => (
  <SafeAreaView>
    <Pressable
      onPress={() =>
        navigation.navigate("Category", { id: 1, name: "Category numero uno" })
      }
    >
      <Text>Category 1</Text>
    </Pressable>
    <Pressable
      onPress={() =>
        navigation.navigate("Category", { id: 2, name: "Second Cat" })
      }
    >
      <StyledText bold>Category 2</StyledText>
    </Pressable>
  </SafeAreaView>
);

export default Categories;
