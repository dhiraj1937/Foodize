import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView
} from "react-native";
import PropTypes from "prop-types";
import StarRating from "react-native-star-rating";
import ReadMore from "react-native-read-more-text";
export class CustomReviewTemplate extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: "Food",
          icon: require("../Images/food1.png"),
          count: 40
        },
        {
          name: "Special",
          icon: require("../Images/food2.png"),
          count: 25
        },
        {
          name: "Menu",
          icon: require("../Images/food3.png"),
          count: 10
        },
        {
          name: "All Photos",
          icon: require("../Images/food4.png"),
          count: 115
        },
        {
          name: "Special",
          icon: require("../Images/food2.png"),
          count: 25
        },
        {
          name: "Menu",
          icon: require("../Images/food3.png"),
          count: 10
        },
        {
          name: "All Photos",
          icon: require("../Images/food4.png"),
          count: 115
        }
      ])
    };
  }

  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={{ color: "#0080FF", marginTop: 5 }} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={{ color: "#0080FF", marginTop: 5 }} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#fff"
        }}
      >
        <View
          style={{
            alignContent: "center",
            backgroundColor: "#fff"
          }}
        >
          <View style={styles.listItemStyle}>
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
                alignItems: "center",
                width: Dimensions.get("window").width
              }}
            >
              <Image
                source={require("./../Images/userprofile.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderColor: "#dfdfdf",
                  borderWidth: 1,
                  marginLeft: 10
                }}
              />
              <View
                style={{
                  justifyContent: "center",
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 10,
                  marginBottom: 10,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    fontWeight: "bold",
                    flex: 0,
                    flexWrap: "wrap",
                    width: Dimensions.get("window").width - 160
                  }}
                >
                  Good Thai
                </Text>

                <Text
                  style={{
                    color: "gray",
                    fontSize: 14,
                    flex: 0,
                    flexWrap: "wrap",
                    marginTop: 10,
                    width: Dimensions.get("window").width - 160
                  }}
                >
                  20 Queen street, NSW Asian, Thai.
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 5,
                  alignItems: "flex-end",
                  marginRight: 10
                }}
              >
                <TouchableOpacity style={styles.followTouchable}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      color: "#4c7f7f"
                    }}
                  >
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "gray",
              marginRight: 10
            }}
          >
            Rated
          </Text>
          <StarRating
            starSize={16}
            disabled={true}
            maxStars={5}
            rating={4.5}
            fullStarColor={"#ffcc2a"}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#ffcc2a",
              marginRight: 10,
              marginLeft: 10
            }}
          >
            4.5
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "gray",
              marginRight: 10,
              marginLeft: 10,
              flex: 1,
              flexDirection: "row",
              textAlign: "right"
            }}
          >
            1 day ago
          </Text>
        </View>
        <View
          style={{
            marginRight: 10,
            marginLeft: 10,
            marginTop: 10,
            backgroundColor: "white"
          }}
        >
          <ReadMore
            numberOfLines={4}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}
          >
            <Text
              style={{
                fontSize: 14,
                color: "gray",

                flex: 1,
                flexDirection: "row",
                textAlign: "justify",
                flexWrap: "wrap",
                width: Dimensions.get("screen").width - 20
              }}
            >
              Many of Consumer Reports' tests of food and drink involve the use
              of sensitive instruments. A liquid chromatograph determines how
              much caffeine is in coffee, and an atomic absorption
              spectrophotometer determines the amount of heavy metals in
              plastics and toys. A digital photometer measures the light and
              color of TV displays. To evaluate a food's nutrition, we use
              sophisticated laboratory instruments. But how do we evaluate its
              sensory quality—the characteristics of its ingredients, the
              balance of its flavors? To do this, we use a very sensitive
              instrument called the human palate.
            </Text>
          </ReadMore>
        </View>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            separatorStyle="none"
            horizontal={true}
            removeClippedSubviews={false}
            showsHorizontalScrollIndicator={false}
            renderRow={data => (
              <TouchableOpacity style={{ padding: 5 }} activeOpacity={0.4}>
                <View style={{ alignContent: "center" }}>
                  <View>
                    <View style={styles.addImageStyle}>
                      <Image source={data.icon} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}
CustomReviewTemplate.PropTypes = {
  IsShowPopup: PropTypes.bool,
  onClose: PropTypes.func
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },

  backImageStyle: {
    width: 25,
    height: 25
  },
  headerSeperatorStyle: {
    backgroundColor: "lightgray",
    width: Dimensions.get("window").width,
    height: 2,
    marginTop: 20
  },
  topHeaderTabStyle: {
    flex: 0,
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  tabTouchableStyle: {},
  listItemStyle: {
    flexDirection: "row",
    height: "auto",
    alignContent: "center",
    marginBottom: 5,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: "#fff"
  },
  boxRightStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2.3,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 5,
    borderRadius: 5
  },
  followTouchable: {
    borderRadius: 15,
    borderColor: "#4c7f7f",
    borderWidth: 1,
    width: 60,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11
  },
  addImageStyle: {
    width: 100,
    height: 80,
    borderRadius: 5,
    overflow: "hidden"
  }
});
