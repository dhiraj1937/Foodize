import React, { Component } from "react";
import PageControl from "react-native-page-control";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

export default class IntroView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      width: Dimensions.get("window").width
    };

    this._onPageControlValueChange = this._onPageControlValueChange.bind(this);
    this._onScroll = this._onScroll.bind(this);
  }
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <ScrollView
          ref="ScrollView"
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          style={styles.scrollContainer}
          onScroll={this._onScroll}
          scrollEventThrottle={16}
        >
          <View style={[styles.viewStyle, { width: screenWidth }]}>
            <Image
              source={require("./../Images/5.png")}
              resizeMode="contain"
              style={[styles.image]}
            />
            <Text style={styles.scrollItemTitle}>Quick Search</Text>
            <Text style={styles.scrollItemDesc}>
              Set your location to start exploring restaurants around you
            </Text>
          </View>
          <View style={[styles.viewStyle, { width: screenWidth }]}>
            <Image
              source={require("./../Images/2.png")}
              resizeMode="contain"
              style={[styles.image]}
            />
            <Text style={styles.scrollItemTitle}>Variety of food</Text>
            <Text style={styles.scrollItemDesc}>
              Set your location to start exploring restaurants around you
            </Text>
          </View>
          <View style={[styles.viewStyle, { width: screenWidth }]}>
            <Image
              source={require("./../Images/3.png")}
              resizeMode="contain"
              style={[styles.image]}
            />
            <Text style={styles.scrollItemTitle}>Search for a place</Text>
            <Text style={styles.scrollItemDesc}>
              Set your location to start exploring restaurants around you
            </Text>
          </View>
          <View style={[styles.viewStyle, { width: screenWidth }]}>
            <Image
              source={require("./../Images/4.png")}
              resizeMode="contain"
              style={[styles.image]}
            />
            <Text style={styles.scrollItemTitle}>Fast Shipping</Text>
            <Text style={styles.scrollItemDesc}>
              Set your location to start exploring restaurants around you
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 17 }}> LOGIN </Text>
        </TouchableOpacity>
        <PageControl
          style={{ position: "absolute", left: 0, right: 0, bottom: 80 }}
          numberOfPages={4}
          currentPage={this.state.currentPage}
          hidesForSinglePage
          pageIndicatorTintColor="white"
          currentPageIndicatorTintColor="#fffdaf"
          indicatorStyle={{ borderRadius: 5 }}
          currentIndicatorStyle={{ borderRadius: 5 }}
          indicatorSize={{ width: 8, height: 8 }}
          onValueChange={this._onPageControlValueChange}
        />
      </View>
    );
  }

  _onPageControlValueChange(currentPage) {
    this.refs.ScrollView.scrollResponderScrollTo({
      x: this.state.width * currentPage,
      y: 0,
      animated: true
    });
  }

  _onScroll({ nativeEvent }) {
    let currentPage = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (this.state.currentPage !== currentPage) {
      this.setState({ currentPage });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcc2a"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  scrollItemDesc: {
    flex: 1,
    margin: 17,
    backgroundColor: "#ffffff00",
    textAlign: "center",
    fontWeight: "bold",
    color: "#2B2828",
    height: "20%"
  },
  scrollItemTitle: {
    flex: 0,
    margin: 20,
    backgroundColor: "#ffffff00",
    margin: 10,
    textAlign: "center",
    fontSize: 25,
    paddingTop: 10,
    fontWeight: "bold"
  },
  scrollContainer: {
    marginTop: 20,
    paddingVertical: 20,
    backgroundColor: "#ffffff00",
    paddingTop: 50,
    height: "50%"
  },
  image: {
    alignItems: "center",
    flex: 0,
    marginTop: 10
  },
  viewStyle: {
    backgroundColor: "#ffffff00",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 140,
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
  indicatorStyle: {
    marginBottom: 40
  }
});
