import { View, Text } from "react-native";
const logoImg = require("./assets/android-icon-background.png");

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* TEXT COMPONENT */}

      <Text>
        <Text style={{ fontSize: 34, color: "Violet", fontWeight: "bold" }}>
          HELLO ANDROID
        </Text>
      </Text>
    </View>
  );
}
