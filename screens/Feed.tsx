import React, { useMemo } from "react";
import faker from "faker";
import StyledText from "../components/StyledText";
import { Text, SectionList, SafeAreaView, View, Pressable } from "react-native";
import PostCard from "../components/PostCard";
import posts, { Post } from "../fixtures/postFixtures";
import { ScrollView } from "react-native-gesture-handler";

const Feed = ({ navigation }) => {
  const renderItem = ({ item }: { item: Post }) => {
    return <PostCard post={item} />;
  };
  const filteredPosts = useMemo(
    () => [
      {
        title: "Top posts from categories you're following",
        data: posts
          .filter((item) => item.category.following && item.score > 1000)
          .slice(0, 15),
      },
      {
        title: "Trending posts",
        data: posts
          .filter((item) => item.trending && item.score > 1000)
          .slice(0, 15),
      },
    ],
    []
  );
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF" }}>
      <View style={{ backgroundColor: "#EEE" }}>
        <SectionList
          sections={filteredPosts}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <StyledText
              bold
              textStyle={{
                fontSize: 12,
              }}
              viewStyle={{
                paddingVertical: 10,
                backgroundColor: "#FFF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {title}
            </StyledText>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Feed;
