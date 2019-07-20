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

import Geocoder from "react-native-geocoding";
export default class SignUpView extends Component {
  state = {
    address: ""
  };

  handleAddress = text => {
    Geocoder.from(text)
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
      })
      .catch(error => console.warn(error));
  };
  render() {
    let screenWidth = Dimensions.get("window").width;
    Geocoder.init("AIzaSyC5irPen_RngFnsgih9L3X2sbvWRQWogIU");
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 20,
              marginLeft: 10
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image
                style={styles.backImageStyle}
                source={require("../Images/back.png")}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginTop: 5
              }}
            >
              Sign Up
            </Text>
          </View>
          <ScrollView>
            <View style={styles.containerInside}>
              <TextInput style={styles.inputStyle} placeholder="Full Name" />
              <View style={styles.separatorStyle} />
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                keyboardType="email-address"
              />
              <View style={styles.separatorStyle} />
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                secureTextEntry={true}
              />
              <View style={styles.separatorStyle} />
              <TextInput
                style={styles.inputStyle}
                placeholder="Address"
                secureTextEntry={false}
                onChangeText={this.handleAddress}
              />
              <View style={styles.separatorStyle} />
              <View alignSelf="auto">
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("Main")}
                >
                  <Text style={{ color: "#ffffff", fontSize: 17 }}>
                    {" "}
                    Submit{" "}
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
  container: {},

  header: {
    flex: 0,
    margin: 20,
    backgroundColor: "#ffffff00",
    textAlign: "center",
    fontSize: 25,
    paddingTop: 0,
    fontWeight: "bold",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: "20%"
  },
  headerSub: {
    flex: 0,
    margin: 5,
    backgroundColor: "#ffffff00",
    textAlign: "center",
    fontSize: 17,
    paddingTop: 0,
    fontWeight: "bold",
    marginLeft: "20%",
    marginRight: "20%",
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
    fontSize: 17,
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
