import AsyncStorage from "@react-native-async-storage/async-storage";

export const FLASHCARD_STORAGE_KEY = "@flashcards";

export const getDecks = async () => {
  const decksJson = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
  return JSON.parse(decksJson);
};

export const getDeck = async (id) => {
  const decksJson = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
  const decks = JSON.parse(decksJson);
  return decks[id];
};

export const addDeck = async (deck) => {
  return await AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [deck.id]: {
        id: deck.id,
        title: deck.title,
        cards: [],
      },
    })
  );
};

export const addCard = async (deckId, card) => {
  const decksJson = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
  const decks = JSON.parse(decksJson);
  const newDecks = {
    ...decks,
    [deckId]: {
      ...decks[deckId],
      cards: [...decks[deckId].cards, card],
    },
  };

  AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(newDecks));
};
