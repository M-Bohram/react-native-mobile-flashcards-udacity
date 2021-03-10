# Udacity React Nanodegree Project: Mobile Flashcards

This is the third project from the Udacity React Nanodegree and focuses on building a "Mobile Flashcards" app using [React Native](https://facebook.github.io/react-native/).

| Contents                            |
| :---------------------------------- |
| [App Experience](#app-experience)   |
| [Getting Started](#getting-started) |
| [Tech Stack](#tech-stack)           |
| [Platforms](#platforms)             |

## App Experience

The application allows a user to create a deck of flash cards, each capturing a question and answer for the deck's topic. The user can then start a quiz to test their knowledge of a particular topic.

## Getting Started

To run this project locally, clone this repository and run the following commands:

- `npm install`
- `npm start`
  - Since this project is `React Native` and iOS and/or Android Simulator will need to be configured on the computer.

## Tech Stack

This is a [React Native](https://facebook.github.io/react-native/) app and as such the project was started using [`create-react-native-app`](https://github.com/react-community/create-react-native-app). The code base is rather straight forward and a standard React component model is used. [Redux](https://redux.js.org/) is used for state management and [React Native AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage) is used for persistence. The data structure used relies on a random unique ID being generated for each deck, and the data for each deck being stored accordingly:

```javascript
random_id_string: {
  id: random_id_string,
  title: name_of_deck,
  cards: [
    {question , answer},
    {question , answer},
    {question , answer}
  ]
},
random_id_string: {
  id: random_id_string,
  name: name_of_deck,
  cards: [
    {question , answer},
    {question , answer},
    {question , answer}
  ]
}
```

This application could certainly be enhanced (such as enabling deletion support for decks and cards), but as of right now it delivers on the requirements for the Udacity React Nanodegree.

## Platforms

| Platform | Tested             | Notes                                                           |
| :------- | :----------------- | :-------------------------------------------------------------- |
| iOS      | :x:                | Not yet tested on iOS                                           |
| Android  | :white_check_mark: | @M-Bohram tested it on Android real device "Android version 11" |
