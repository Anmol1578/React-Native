import {
  View,
  Text,
  Image,
  Button,
  Pressable,
} from "react-native";
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
 <Pressable onPress={() => console.log("Image pressed!")}>
       <Image source={logoImg} style={{ width: 300, height: 300, marginTop: 20 }} />
 </Pressable>

<Pressable onPress={() => console.log("Text pressed!")}>
       <Text>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet, consectetur 
       </Text>

       </Pressable>

    </View>
  );
}
