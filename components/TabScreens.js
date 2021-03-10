import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import ViewDecks from "./ViewDecks";
import AddDeck from "./AddDeck";

const Tab = createBottomTabNavigator();

const TabScreens = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="ViewDecks"
      component={ViewDecks}
      options={{
        title: "View Deck",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="list" size={30} color={tintColor} />
        ),
      }}
    />
    <Tab.Screen
      name="AddDeck"
      component={AddDeck}
      options={{
        title: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="plus" size={30} color={tintColor} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabScreens;
