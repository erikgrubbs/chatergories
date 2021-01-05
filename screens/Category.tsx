import React, { useEffect } from "react";
import { Text, View, Pressable } from "react-native";

const Category = ({ route, navigation }) => {
  const { id, name } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <View>
      <Text>Category id: {id}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Post", { postId: 123, categoryId: id });
        }}
      >
        <Text>Post 1</Text>
      </Pressable>
    </View>
  );
};

export default Category;
