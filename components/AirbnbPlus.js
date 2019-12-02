import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Colors from "../assets/Colors";

const { width, height } = Dimensions.get("window");

const AirbnbPlus = props => {
  return (
    <View
      style={{
        marginLeft: 10,
        marginTop: 10,
        width: width / 2 - 20,
        height: width / 2 - 20,
        backgroundColor: "white",
        elevation: 5,
        marginBottom: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
      }}
    >
      <View style={{ height: width / 2 - 80 }}>
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
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly"
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontSize: 12
          }}
        >
          Private Rooms
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>{props.place}</Text>
        <Text style={{ fontSize: 12 }}>Taka. 2000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AirbnbPlus;
