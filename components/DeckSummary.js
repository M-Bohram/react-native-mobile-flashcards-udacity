import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { white, gray } from "../utils/colors";

const DeckSummary = ({ id, name, cardCount, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DeckDetail", { id })}
      style={styles.container}
    >
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.count}>{cardCount} Cards</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 4,
    padding: 10,
    margin: 30,
    marginBottom: 5,
    height: 150,
    borderWidth: 2,
    borderColor: gray,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  count: {},
});

export default DeckSummary;
