import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { addCard } from "../utils/api";
import { white, blue } from "../utils/colors";

function AddCard({ route, navigation }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const deckId = route.params.id;

  const addCardToStorage = async () => {
    const card = { question, answer };
    await addCard(deckId, card);
    navigation.navigate("DeckDetail", { id: deckId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>What is the card question?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the card question ..."
          onChangeText={setQuestion}
          value={question}
        />
      </View>
      <Text style={styles.headerTitle}>What is the card answer?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the card answer ..."
          onChangeText={setAnswer}
          value={answer}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={addCardToStorage}
      >
        <Text style={styles.buttonText}>Add Card</Text>
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
    fontSize: 17,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: blue,
    borderRadius: 5,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 18,
    color: white,
  },
});

export default AddCard;
