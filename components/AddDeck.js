import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { addDeck } from "../utils/api";
import { blue, red, white } from "../utils/colors";
import { generateId } from "../utils/helpers";

function AddDeck({ navigation }) {
  const [input, setInput] = useState("");
  const addDeckToStorage = async () => {
    const deck = { id: generateId(), title: input, cards: [] };
    await addDeck(deck);
    navigation.navigate("DeckDetail", { id: deck.id });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>What is the deck title ?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Deck title"
          onChangeText={setInput}
          value={input}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={addDeckToStorage}
      >
        <Text style={styles.buttonText}>Add Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
  },
  inputContainer: {
    padding: 20,
    fontSize: 15,
  },
  input: {
    paddingHorizontal: 30,
    fontSize: 20,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: blue,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: white,
  },
});

export default AddDeck;
