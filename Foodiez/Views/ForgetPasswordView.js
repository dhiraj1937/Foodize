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

export default class ForgetPasswordView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{ alignItems: "flex-start", marginLeft: 20, marginTop: 40 }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image
                style={styles.backImageStyle}
                source={require("../Images/back.png")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.header}>Forget Password?</Text>
          <Text style={styles.headerSub}>Retrive Your Password</Text>
          <View style={styles.containerInside}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              keyboardType="email-address"
            />
            <View style={styles.separatorStyle} />
            <View alignSelf="auto">
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={{ color: "#ffffff", fontSize: 17 }}> SUBMIT </Text>
              </TouchableOpacity>
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
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%"
  },
  headerSub: {
    flex: 0,
    margin: 0,
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
