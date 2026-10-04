// ALign Items 

import { View, StyleSheet } from "react-native";
import Box from "./RNLayout/components/box";

export default function App() {
  return (

    // <View style={{ backgroundColor:"plum" , flex: 1}}></View>
    <View style={styles.container}>
{/*       
           <Box style={{ backgroundColor: "#8e9b00", alignSelf:"flex-start" }}>Box 1</Box>
            <Box style={{ backgroundColor: "#1b57da" , alignSelf:"flex-end" }}>Box 2</Box>
            <Box style={{ backgroundColor: "#d68215" , alignSelf:"center" }}>Box 3</Box>
            <Box style={{ backgroundColor: "#00c2f3"  , alignSelf:"stretch"}}>Box 4</Box> */}


      <Box style={{ backgroundColor: "#8e9b00" ,  flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#1b57da" , flex: 3 }}>Box 2</Box>
      <Box style={{ backgroundColor: "#d68215" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#00c2f3" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#ee1f98" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#200110" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#454739" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:"stretch",               // Align Items
    // alignItems:"flex-start",
    // alignItems:"flex-end",
    // alignItems:"center",
    // alignItems:"baseline",
    marginTop: 50,
    borderWidth: 6,
    borderColor: "red",
  },
});