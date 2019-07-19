import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";
export class CustomCellFav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            {
              backgroundColor: this.props.bgColor1,
              alignItems: "center",
              justifyContent: "center"
            }
          ]}
        >
          <Text style={styles.titleStyle}>{this.props.boxTitle1}</Text>
        </View>
        <View
          style={[
            styles.box,
            {
              backgroundColor: this.props.bgColor2,
              alignItems: "center",
              justifyContent: "center"
            }
          ]}
        >
          <Text style={styles.titleStyle}>{this.props.boxTitle2}</Text>
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
  box: {
    borderRadius: 10,
    height: 170,
    marginTop: 5,
    flex: 1,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 5
  },
  container: {
    height: 200,
    width: 180
  },
  titleStyle: {
    color: "#fff",
    fontWeight: "bold"
  }
});
