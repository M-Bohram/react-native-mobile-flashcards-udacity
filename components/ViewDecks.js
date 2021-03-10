import React, { useState, useCallback, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import DeckSummary from "./DeckSummary";
import { getDecks } from "../utils/api";

function ViewDecks({ navigation }) {
  const [decks, setDecks] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getDecks().then((decksData) => setDecks(decksData));
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      {decks ? (
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckSummary
              id={item.id}
              name={item.title}
              cardCount={item.cards.length}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Decks Added Yet!</Text>
        </View>
      )}
    </View>
  );
}

export default ViewDecks;
