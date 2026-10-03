import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
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
      <Text style={styles.text}>My name is {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: "#767577", true: "lightblue" }}
          thumbColor= "#f4f3f4"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
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
    fontSize: 32,
    padding: 2,
    margin: 20,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
