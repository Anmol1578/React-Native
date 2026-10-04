import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/android-icon-background.png");

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 50,
      }}
    >
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  );
}
