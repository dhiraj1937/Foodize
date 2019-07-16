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
  ProgressBarAndroid,
  ProgressViewIOS
} from "react-native";

export default class ProfileView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 40
            }}
          >
            Silver Level
          </Text>
          <View>
            <Image
              style={styles.headerImage}
              source={require("../Images/MyProfileLogo.png")}
            />
          </View>
        </View>
        {/* <View
          style={{
            alignItems: "flex-start",
            flexDirection: "row",
            alignContent: "center",
            position: "absolute",
            top: 40,
            left: 20,
            
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Image
              style={styles.backImageStyle}
              source={require("../Images/back.png")}
            />
          </TouchableOpacity>
        </View> */}
        <Text
          style={{
            color: "gray",
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 10,
            flex: 0,
            textAlign: "center"
          }}
        >
          My Level
        </Text>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20
          }}
        >
          <View style={styles.headerControlStyle}>
            <Text style={styles.headerControlTitleStyle}>953</Text>
            <Text style={styles.headerControlSubTitleStyle}>Review</Text>
          </View>
          <View style={styles.headerControlStyle}>
            <Text style={styles.headerControlTitleStyle}>358</Text>
            <Text style={styles.headerControlSubTitleStyle}>Comments</Text>
          </View>
          <View style={styles.headerControlStyle}>
            <Text style={styles.headerControlTitleStyle}>201</Text>
            <Text style={styles.headerControlSubTitleStyle}>Photos</Text>
          </View>
          <View style={styles.headerControlStyle}>
            <Text style={styles.headerControlTitleStyle}>623</Text>
            <Text style={styles.headerControlSubTitleStyle}>Bookmark</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "lightgray",
            width: Dimensions.get("window").width,
            height: 2,
            marginTop: 10
          }}
        />
        <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          {Platform.OS === "android" ? (
            <ProgressBarAndroid
              styleAttr="Horizontal"
              progress={0.5}
              indeterminate={false}
              height={5}
              progressTintColor="#4c7f7f"
            />
          ) : (
            <ProgressViewIOS
              style={{
                transform: [{ scaleX: 1.0 }, { scaleY: 4 }],
                height: 12
              }}
              progressTintColor="#4c7f7f"
              progress={0.5}
            />
          )}
        </View>
        <View
          style={{
            flex: 0,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: "row"
          }}
        >
          <View>
            <View style={styles.headerSubSectionStyle}>
              <Text>Silver Level</Text>
            </View>
            <View
              style={{
                margin: 10
              }}
            >
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={{ color: "gray", fontSize: 14 }}>1205 Points</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignContent: "flex-end",
              alignItems: "flex-end",
              marginRight: 10
            }}
          >
            <View style={{ marginLeft: 20 }}>
              <Text>Gold Level</Text>
            </View>
            <View
              style={{
                marginLeft: 20,
                marginTop: 10
              }}
            >
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={{ color: "gray", fontSize: 14 }}>3000 Points</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "lightgray",
            width: Dimensions.get("window").width,
            height: 2,
            marginTop: 20
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    alignContent: "center"
  },

  header: {
    flex: 0,
    backgroundColor: "#ffcc2a",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: 300
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

  backImageStyle: {
    width: 25,
    height: 25
  },
  headerImage: {
    width: 200,
    height: 200
  },

  headerControlTitleStyle: {
    color: "#4c7f7f",
    fontSize: 20,
    fontWeight: "bold"
  },
  headerControlSubTitleStyle: {
    color: "#333333",
    fontSize: 11
  },
  headerControlStyle: {
    alignItems: "center",
    alignContent: "center"
  },
  headerSubSectionStyle: {
    flex: 0,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10
  }
});
