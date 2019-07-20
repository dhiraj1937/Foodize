import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from "react-native";

export default class HomeView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.header}>Hi, Nice to meet you!</Text>
            <Text style={styles.headerSub}>
              Set your location to start exploring restaurants around you
            </Text>
            <View style={styles.containerInside}>
              <View alignSelf="auto">
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("LocationList")}
                >
                  <Text style={{ color: "#ffffff", fontSize: 17 }}>
                    User Current Location
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },

  header: {
    flex: 0,
    margin: 20,
    backgroundColor: "#ffffff00",
    textAlign: "center",
    fontSize: 25,
    paddingTop: 0,
    fontWeight: "bold",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "50%"
  },
  headerSub: {
    flex: 0,
    margin: 0,
    backgroundColor: "#ffffff00",
    textAlign: "center",
    fontSize: 17,
    paddingTop: 0,
    fontWeight: "bold",
    marginLeft: "10%",
    marginRight: "10%",
    color: "#d3d3d3"
  },
  containerInside: {
    marginTop: 20
  },
  inputStyle: {
    flex: 0,
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18
  },
  separatorStyle: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  buttonStyle: {
    backgroundColor: "#ffcc2a",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffcc",
    marginBottom: 10,
    marginTop: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  btnForgetPasswordStyle: {
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 10,
    color: "#33FFC1"
  },
  backImageStyle: {
    width: 25,
    height: 25
  }
});
