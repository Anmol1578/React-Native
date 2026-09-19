import { View, Button } from "react-native";
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
      <Button
        title="Press me"
        onPress={() => console.log("Button pressed!")}
        color="midnightblue"
        disabled={false}
      />
    </View>
  );
}
