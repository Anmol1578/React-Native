import { View, Text, StyleSheet, Button } from "react-native";
import { useLayoutEffect } from "react";

export default function AboutScreen({ route, navigation }) {


  const { data, name } = route.params;


useLayoutEffect (() => {
 navigation.setOptions({
  title: name
 })
}, [navigation , name])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen {data}</Text>

      <View style={styles.button}>
        <Button
          title="Update the Data"
          onPress={() =>
            navigation.setParams({
              data: "REDFIELD",
            })
          }
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go Back with Data"
          onPress={() =>
            navigation.navigate("Home", {
              result: "Data From About",
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  button: {
    marginBottom: 15,
  },
});
