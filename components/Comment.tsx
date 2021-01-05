import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";
import { CommentType } from "../fixtures/postFixtures";

type CommentProps = {
  comment: CommentType;
  bg: string;
};

const Comment = ({ comment, bg }: CommentProps) => (
  <View style={{ backgroundColor: bg, padding: 8 }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <StyledText
        viewStyle={{ flex: 1, alignItems: "flex-end", paddingRight: 8 }}
      >
        {comment.score}
      </StyledText>
      <View
        style={{
          flex: 10,
          paddingLeft: 4,
          borderLeftWidth: 2,
          borderLeftColor: bg === "#FFF" ? "#EEE" : "#DDD",
        }}
      >
        <StyledText
          viewStyle={{ marginBottom: 4 }}
          textStyle={{ fontSize: 10, color: "#888" }}
        >
          {comment.user}
        </StyledText>
        <StyledText>{comment.text}</StyledText>
      </View>
    </View>
  </View>
);

export default Comment;
