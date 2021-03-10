import React, { useState, useCallback } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getDeck } from "../utils/api";
import { blue, red, white } from "../utils/colors";
import Loading from "./Loading";

function DeckDetail({ route, navigation }) {
  const [deck, setDeck] = useState(null);

  const deckId = route.params.id;

  useFocusEffect(
    useCallback(() => {
      getDeck(deckId).then((deckResult) => setDeck(deckResult));
    }, [])
  );

  const startQuiz = () => {
    if (deck.cards.length === 0) {
      alert("The deck is empty, you can't start the quiz!");
      return;
    }
    navigation.navigate("Quiz", { id: deckId });
  };

  return deck ? (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>{deck.cards.length} Cards</Text>
      <TouchableOpacity
        style={styles.addCardContainer}
        onPress={() => navigation.navigate("AddCard", { id: deckId })}
      >
        <Text style={styles.addCardText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startQuizContainer} onPress={startQuiz}>
        <Text style={styles.startQuizText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 200,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  cards: {
    fontSize: 16,
    marginBottom: 15,
  },
  addCardContainer: {
    backgroundColor: white,
    fontSize: 25,
    padding: 15,
    marginBottom: 20,
  },
  addCardText: {
    fontSize: 20,
  },
  startQuizContainer: {
    backgroundColor: blue,

    padding: 13,
  },
  startQuizText: { fontSize: 20, color: white },
});

export default DeckDetail;
