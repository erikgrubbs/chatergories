import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

type TextProps = {
  children: string | number;
  bold?: boolean;
  textStyle?: object;
  viewStyle?: object;
};

const StyledText = ({
  bold,
  children,
  textStyle,
  viewStyle,
  ...rest
}: TextProps) => (
  <View style={viewStyle}>
    <Text
      style={{
        ...styles[bold ? "boldText" : "basicText"],
        ...textStyle,
      }}
      {...rest}
    >
      {children}
    </Text>
  </View>
);

export default StyledText;
