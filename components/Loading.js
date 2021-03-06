import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
});

export default Loading;
