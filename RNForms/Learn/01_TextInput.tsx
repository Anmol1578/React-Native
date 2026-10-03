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
      <Text style={styles.text}>My name is: {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    fontSize: 40,
    padding: 16,
    margin: 20,
  },
});
