import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";
export class CustomCellFav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.box1,
            { backgroundColor: this.props.bgColor1, alignItems: "center" }
          ]}
        >
          <Text>{this.props.boxTitle1}</Text>
        </View>
        <View
          style={[
            styles.box2,
            { backgroundColor: this.props.bgColor2, alignItems: "center" }
          ]}
        >
          <Text>{this.props.boxTitle2}</Text>
        </View>
      </View>
    );
  }
}
CustomCellFav.PropTypes = {
  boxTitle1: PropTypes.string,
  boxTitle2: PropTypes.string,
  bgColor1: PropTypes.string,
  bgColor2: PropTypes.string
};
const styles = StyleSheet.create({
  box1: {
    borderRadius: 10,
    height: 170,
    marginTop: 10,
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  },
  box2: {
    borderRadius: 10,
    height: 170,
    marginTop: 10,
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  },
  container: {
    height: 170,
    width: 160
  }
});
