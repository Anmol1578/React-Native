import { View, Text, StyleSheet, type ViewStyle } from "react-native";
import type { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export default function Box({ children, style }: BoxProps) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});