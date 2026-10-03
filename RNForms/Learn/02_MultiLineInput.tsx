import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your text here..."
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Message"
        multiline
      />
      <Text style={styles.text}>React Native is a {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f17878",
    paddingTop: StatusBar.currentHeight,
  },

  input: {
    height: 50,
    margin: 12,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  text: {
    fontSize: 25,
    padding: 16,
    margin: 20,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
