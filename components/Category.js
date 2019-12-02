import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../assets/Colors";

const Category = props => {
  return (
    <View
      style={{
        marginLeft: 10,
        flex: 1,
        width: 130,
        height: 130,

        borderRadius: 50
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          source={props.image}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover"
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: Colors.fontColor }}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Category;
