import React, { Component } from "react";
import CodeInput from "react-native-confirmation-code-input";
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
  Alert
} from "react-native";

export default class VerifyNumberView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ""
    };
  }

  _onFulfill(code) {
    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    if (code == "1234") {
      Alert.alert("Confirmation Code", "Successful!", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      Alert.alert("Confirmation Code", "Code not match!", [{ text: "OK" }], {
        cancelable: false
      });
      this.refs.codeInputRef1.clear();
    }
  }

  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Verify Your Number</Text>
          <Text style={styles.headerSub}>Enter Your Code Here</Text>
          <View style={styles.inputWrapper3}>
            <CodeInput
              ref="codeInputRef1"
              keyboardType="numeric"
              codeLength={4}
              className={"border-b"}
              compareWithCode="1234"
              autoFocus={true}
              codeInputStyle={{
                fontWeight: "800",
                color: "#000000",
                borderColor: "#A9A9A9"
              }}
              containerStyle={{ marginTop: 0 }}
              onFulfill={(isValid, code) => this._onFulfill(code)}
            />
          </View>
          <View style={styles.containerInside}>
            <View alignSelf="auto">
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={{ color: "#ffffff" }}> Verify Now </Text>
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
    marginTop: "15%"
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
    width: 30,
    height: 30
  },
  inputWrapper3: {
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  customInputStyle: {
    color: "#d3d3d3"
  }
});
