import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

//Icons from react native icons
import trips from "./images/icons/trips.png";
import explore from "./images/icons/explore.png";
import home from "./images/icons/home.png";
import profile from "./images/icons/profile.png";

//Screens
import Explore from "./screens/Explore";
import Home from "./screens/Home";
import Trips from "./screens/Trips";
import Profile from "./screens/Profile";

const root = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={explore}
            style={{ width: 24, height: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "HOME",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={home}
            style={{ width: 24, height: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "TRIPS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={trips}
            style={{ width: 24, height: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={profile}
            style={{ width: 24, height: 24, tintColor: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      inactiveTintColor: "#FEF9FB",
      activeTintColor: "black",
      style: {
        backgroundColor: "#FF6879",
        marginTop: 10
      }
    }
  }
);

const AppContainer = createAppContainer(root);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
