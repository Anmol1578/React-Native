import { View, StatusBar, Button } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 60,
      }}
    >
      <StatusBar backgroundColor="blue" barStyle="dark-content" hidden={true} />
    </View>
  );
}
