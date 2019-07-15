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
  TextInput
} from "react-native";

export default class LoginView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Welcome To Foodiez</Text>
          <Text style={styles.headerSub}>Sign in to continue</Text>
          <View style={styles.containerInside}>
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

            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("Forget")}
                style={styles.btnForgetPasswordStyle}
              >
                <Text style={{ color: "#33FFC1" }}>Forget Password?</Text>
              </TouchableOpacity>
            </View>

            <View alignSelf="auto">
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Text style={{ color: "#ffffff", fontSize: 17 }}> LOGIN </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20
                }}
              >
                <TouchableOpacity
                  style={{}}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={{ color: "#2B2828" }}>
                    New to Capi Restaurant?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{}}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={{ color: "#33FFC1" }}> SignUp? </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
  }
});
