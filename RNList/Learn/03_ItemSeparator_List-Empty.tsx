import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";

import pokemonList from "./data.json";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          // data={pokemonList}
                    data={[]}
          renderItem={({ item }) => {
            console.log(item.id);

            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardName}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height:16 }}/>}
          ListEmptyComponent={<Text> No items found </Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },

  cardText: {
    color: "darkblue",
    fontSize: 30,
  },

  cardName: {
    color: "darkgreen",
    fontSize: 22,
  },
});
