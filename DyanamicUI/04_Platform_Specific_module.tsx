import { View, StyleSheet, Text, Platform } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box]}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },

  box: {
    padding: 20,
  },

  text: {
    ...Platform.select({
      ios: { color: "purple", fontSize: 24, fontStyle: "italic" },

      android: { color: "blue", fontSize: 30 },
    }),
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
