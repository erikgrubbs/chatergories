import React from "react";
import faker from "faker";
import StyledText from "./StyledText";
import { View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Post } from "../fixtures/postFixtures";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <StyledText
        viewStyle={{
          alignSelf: "center",
        }}
        textStyle={{
          fontSize: 18,
          fontFamily: "FiraCode_700Bold",
        }}
      >
        {post.score}
      </StyledText>
      <Pressable
        style={{
          flexDirection: "row",
          flex: 1,
          borderRadius: 4,
          backgroundColor: "#FFF",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 5,
          marginLeft: 8,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        onPress={() => {
          navigation.navigate("Post", {
            id: post.id,
            category: post.category,
            content: post.content,
            name: post.name,
            comments: post.comments,
            score: post.score,
          });
        }}
      >
        <Image
          source={{
            uri: faker.random.image(),
          }}
          style={{ borderRadius: 5, height: 100, width: 100 }}
        />
        <View
          style={{ flex: 1, paddingLeft: 8, justifyContent: "space-between" }}
        >
          <StyledText textStyle={{ fontSize: 16 }} bold>
            {post.name}
          </StyledText>
          <View>
            <StyledText bold textStyle={{ color: "#AAA", fontSize: 10 }}>
              {post.category.name}
            </StyledText>
            <StyledText
              textStyle={{ fontSize: 12, fontFamily: "FiraCode_300Light" }}
            >{`${post.comments.length} comments`}</StyledText>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PostCard;
