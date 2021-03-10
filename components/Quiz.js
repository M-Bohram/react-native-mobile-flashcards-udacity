import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getDeck } from "../utils/api";
import Loading from "./Loading";
import { useFocusEffect } from "@react-navigation/native";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";
import { red, white, green, gray, black, blue } from "../utils/colors";

function Quiz({ route, navigation }) {
  const [deck, setDeck] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const deckId = route.params.id;

  useFocusEffect(
    useCallback(() => {
      getDeck(deckId).then((deckResult) => setDeck(deckResult));
      setCardIndex(0);
      setCorrectCount(0);
    }, [])
  );

  resetLocalNotifications = () => {
    clearLocalNotification();
    setLocalNotification();
  };

  useEffect(() => {
    setCurrentCard(deck?.cards[cardIndex]);
    setShowAnswer(false);
    const quizCompleted = cardIndex !== 0 && cardIndex === deck?.cards.length;
    if (quizCompleted) {
      resetLocalNotifications();
      const correctPercentage = (correctCount / deck?.cards.length) * 100;
      navigation.navigate("QuizResult", {
        id: deckId,
        percentage: correctPercentage,
      });
    }
  }, [deck, cardIndex]);

  const handleAnswer = (answer) => {
    if (answer === "correct") {
      setCorrectCount(correctCount + 1);
    }
    setCardIndex(cardIndex + 1);
  };

  const isCurrentIndexExceedCardsLength = () => {
    return cardIndex <= deck?.cards.length - 1;
  };

  return deck && isCurrentIndexExceedCardsLength() ? (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionCount}>
          Q No.{cardIndex + 1}/ {deck?.cards.length}
        </Text>
        <Text style={styles.question}>{currentCard?.question}</Text>
        {showAnswer && <Text style={styles.answer}>{currentCard?.answer}</Text>}
        {!showAnswer && (
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              { backgroundColor: gray, marginHorizontal: 40, borderRadius: 10 },
            ]}
            onPress={() => setShowAnswer(true)}
          >
            <Text style={[styles.buttonText, { color: white }]}>
              Show Answer
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: green }]}
        onPress={() => handleAnswer("correct")}
      >
        <Text style={[styles.buttonText, { color: white }]}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: red }]}
        onPress={() => handleAnswer("incorrect")}
      >
        <Text style={[styles.buttonText, { color: white }]}>Incorrect</Text>
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
    alignItems: "center",
    marginTop: 50,
  },
  questionContainer: {
    backgroundColor: white,
    width: 350,
    height: 300,
    borderRadius: 10,
    paddingTop: 50,
    marginBottom: 20,
  },
  questionCount: {
    paddingLeft: 10,
  },
  question: {
    fontSize: 25,
    marginBottom: 80,
    textAlign: "center",
    color: black,
  },
  answer: {
    textAlign: "center",
    fontSize: 23,
    marginBottom: 10,
    color: blue,
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

export default Quiz;
