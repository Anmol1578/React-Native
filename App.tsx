import { View, StyleSheet } from "react-native";
import Box from "./RNLayout/components/box";

export default function App() {
  return (

    // <View style={{ backgroundColor:"plum" , flex: 1}}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#1b57da"  }}>Box 2</Box>
      <Box style={{ backgroundColor: "#d68215" }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "#00c2f3" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#ee1f98" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#200110" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#454739" }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    borderWidth: 6,
    borderColor: "red",
  },
});