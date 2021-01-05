import React, { useEffect } from "react";
import StyledText from "../components/StyledText";
import { Text, SafeAreaView, View } from "react-native";
import Comment from "../components/Comment";
import { ScrollView } from "react-native-gesture-handler";

const Post = ({ navigation, route }) => {
  const { id, category, content, name, comments, score } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: `${comments.length} comments`,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View
        style={{
          paddingHorizontal: 8,
          paddingTop: 16,
          paddingBottom: 8,
          alignItems: "center",
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#EEE",
        }}
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <StyledText textStyle={{ fontSize: 14, color: "#999" }}>
            {score}
          </StyledText>
          <StyledText textStyle={{ fontSize: 10 }}>{category.name}</StyledText>
        </View>
        <StyledText
          bold
          viewStyle={{ flex: 4, alignItems: "center" }}
          textStyle={{ fontSize: 20 }}
        >
          {name}
        </StyledText>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 4 }}>
          <StyledText
            viewStyle={{
              borderLeftWidth: 2,
              marginVertical: 6,
              paddingLeft: 4,
              borderLeftColor: "#EEE",
            }}
          >
            {content}
          </StyledText>
        </View>

        <StyledText
          viewStyle={{
            backgroundColor: "#f1f1f1",
            paddingVertical: 8,
            alignItems: "center",
          }}
          textStyle={{
            fontSize: 10,
            color: "#888",
          }}
        >
          COMMENTS
        </StyledText>
        {comments.map((comment, i) => (
          <Comment comment={comment} bg={i % 2 ? "#f1f1f1" : "#FFF"} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;
