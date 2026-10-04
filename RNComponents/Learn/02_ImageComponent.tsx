import { View, Text, Image } from "react-native";
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
      {/* Image from Local Storage  */}
      <Image source={logoImg} style={{ width: 300, height: 300 }} />

      {/* Image from Internet */}
      <Image
        source={{ uri: "https://picsum.photos/300/300" }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
