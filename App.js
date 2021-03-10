import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabScreens from "./components/TabScreens";
import DeckDetail from "./components/DeckDetail";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";

const Stack = createStackNavigator();

const StackScreens = () => (
  <Stack.Navigator initialRouteName="Tab">
    <Stack.Screen name="AddCard" component={AddCard} />
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="QuizResult" component={QuizResult} />
    <Stack.Screen name="DeckDetail" component={DeckDetail} />
    <Stack.Screen name="Tab" component={TabScreens} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
}

export default App;
