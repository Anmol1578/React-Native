import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text>LightBlue Box</Text>
      </View>

      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen Box</Text>
      </View>

      <View style={[styles.box, styles.lightyellowBg]}>
        <Text>Lightyellow Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: 300,
    height: 200,
    padding: 80,
    marginBottom: 40,
  },

  lightBlueBg: {
    backgroundColor: "lightblue",
  },

  lightgreenBg: {
    backgroundColor: "lightgreen",
  },

  lightyellowBg: {
    backgroundColor: "lightyellow",
  },
});
