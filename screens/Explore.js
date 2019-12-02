import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  FlatList
} from "react-native";

//Icons and Images
import explore from "../images/icons/explore.png";

//Import colors from assets folder
import Colors from "../assets/Colors";

import AirbnbPlus from "../components/AirbnbPlus";

const { width, height } = Dimensions.get("window");

//Import images
import logo from "../images/background/airbnb.png";
import vacation from "../images/background/vacation.jpg";
import activities from "../images/background/activities.jpg";
import restaurant from "../images/background/restaurant.jpg";
import site1 from "../images/background/site1.jpg";
import site2 from "../images/background/site2.jpg";
import site3 from "../images/background/site3.jpg";
import site4 from "../images/background/site4.jpg";

import Category from "../components/Category";

const Explore = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{ height: 140, position: "relative", overflow: "visible" }}
        >
          <View style={styles.searchSection}>
            <View style={styles.inputContainer}>
              <Image source={explore} style={styles.searchIcon} />
              <TextInput
                placeholder="Search for Places..."
                placeholderTextColor="rgba(255,255,255,0.5)"
                style={styles.searchInput}
              />
            </View>
          </View>
          <View style={styles.box}>
            <Image source={logo} style={{ width: 70, height: 70 }} />
          </View>
        </View>
        <View
          style={{
            height: 130,
            marginTop: 34
          }}
        >
          <ScrollView scrollEventThrottle={16} horizontal={true}>
            <Category image={vacation} text="Vacation Homes" />
            <Category image={activities} text="Activities" />
            <Category image={restaurant} text="Restaurants" />

            <Category image={site1} text="Places" />
            <Category image={site2} text="Countries" />
            <Category image={site3} text="Galas" />
            <Category image={site4} text="Travel" />
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold"
            }}
          >
            Airbnb
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: 5,
              color: Colors.primary
            }}
          >
            Plus
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <AirbnbPlus image={vacation} place="The Cozy Palace" />
          <AirbnbPlus image={site1} place="The Suite Life" />
          <AirbnbPlus image={site2} place="Another Cozy Palace" />
          <AirbnbPlus image={site3} place="Yet Another Cozy Palace" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    height: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  searchIcon: {
    padding: 10,
    width: 24,
    height: 24,
    tintColor: "black"
  },
  searchInput: {
    paddingVertical: 10,
    marginLeft: 5
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    marginHorizontal: 30,
    backgroundColor: Colors.offset,
    borderRadius: 20,
    marginBottom: 12
  },
  box: {
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    bottom: -27,
    right: 150,
    elevation: 4
  }
});

export default Explore;
