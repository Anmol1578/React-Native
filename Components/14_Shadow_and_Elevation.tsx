import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text>LightBlue Box</Text>
      </View>

      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text style={{ borderRadius: 10, backgroundColor: "red" }}>
          Lightgreen Box
        </Text>
      </View>

      <View style={[styles.box, styles.lightyellowBg]}>
        <Text style={{ borderRadius: 10, backgroundColor: "red" }}>
          Lightyellow Box
        </Text>
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
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "Blue",
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

  boxShadow: {
    shadowColor: "#1822b8",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 3,
    shadowRadius: 2,
  },
  androidShadow: {
    elevation: 30,
  },
});
