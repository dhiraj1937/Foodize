import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Platform, StyleSheet, Image, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Home from "./HomeView";
import NearBy from "./LocationNearByView";
import BookMark from "./BookMarksView";
import TopFood from "./TopFoodView";
import Profile from "./ProfileView";
import locationList from "./LocationListView";
import locationDetail from "./LocationDetailView";
import foodDetail from "./FoodDetailView";

const insideHomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  LocationList: {
    screen: locationList,
    navigationOptions: {
      header: null
    }
  },
  LocationDetail: {
    screen: locationDetail,
    navigationOptions: {
      header: null
    }
  },
  FoodDetail: {
    screen: foodDetail,
    navigationOptions: {
      header: null
    }
  }
});

const tabbarVisible = navigation => {
  const { routes } = navigation.state;

  let showTabbar = true;
  routes.forEach(route => {
    showTabbar = true;
    if (route.routeName === "LocationList") {
      showTabbar = false;
    }
  });
  return showTabbar;
};

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: insideHomeNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-home" />
          </View>
        ),
        activeColor: "#ffcc2a",
        inactiveColor: "#b6b6b6",
        tabBarVisible: tabbarVisible(navigation),
        labeled: true
      })
    },
    NearBy: {
      screen: NearBy,
      navigationOptions: {
        tabBarLabel: "Near By",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-pin" />
          </View>
        ),
        activeColor: "#ffcc2a",
        inactiveColor: "#b6b6b6",
        labeled: true
      }
    },
    BookMark: {
      screen: BookMark,
      navigationOptions: {
        tabBarLabel: "BookMarks",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name="ios-bookmark"
            />
          </View>
        ),
        activeColor: "#ffcc2a",
        inactiveColor: "#b6b6b6",
        labeled: true
      }
    },
    Prize: {
      screen: TopFood,
      navigationOptions: {
        tabBarLabel: "Top Foodies",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-trophy" />
          </View>
        ),
        activeColor: "#ffcc2a",
        inactiveColor: "#b6b6b6",
        labeled: true
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-person" />
          </View>
        ),
        activeColor: "#ffcc2a",
        inactiveColor: "#b6b6b6",
        labeled: true
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#ffcc2a",
    inactiveColor: "#b6b6b6",
    barStyle: { backgroundColor: "#ffffff" },
    shifting: false
  }
);
const Container = createAppContainer(TabNavigator);
export default Container;
