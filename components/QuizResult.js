import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, green, gray } from "../utils/colors";

function QuizResult({ route, navigation }) {
  const percentage = route.params.percentage;
  const deckId = route.params.id;

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>You answers were</Text>
      <Text style={styles.percentText}>{percentage}% </Text>
      <Text style={styles.bottomText}>Correct</Text>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: gray }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.buttonText, { color: white }]}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("DeckDetail", { id: deckId })}
      >
        <Text style={styles.buttonText}>Back to Deck</Text>
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
  topText: {
    fontSize: 20,
    marginBottom: 10,
  },
  percentText: {
    fontSize: 50,
    marginBottom: 10,
    color: green,
  },
  bottomText: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: white,
    fontSize: 25,
    padding: 15,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    minWidth: 200,
    textAlign: "center",
  },
});

export default QuizResult;
