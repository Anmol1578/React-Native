import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SectionList,
} from "react-native";

import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return (
              <Text style={styles.sectionHeaderText}> {section.type} </Text>
            );
          }}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          SectionSeparatorComponent={<View style={{ height: 16 }} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8b2c2c",
    // paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
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
  headerText: {
    fontSize: 24,
    color: "Orange",
    textAlign: "center",
    marginBottom: 12,
  },

  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },

  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    color: "darkblue",
    fontWeight: "bold",
  },
});
