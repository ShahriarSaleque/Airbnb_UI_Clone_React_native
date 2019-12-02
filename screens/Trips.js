import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Trips = () => {
  return (
    <View style={styles.screen}>
      <Text>Trips </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Trips;
