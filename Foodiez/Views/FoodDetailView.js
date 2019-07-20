import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import MapView from "react-native-maps";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { List } from "react-native-paper";
import { CustomReviewTemplate } from "../CustomViews/CustomReviewTemplate";

export default class FoodDetailView extends Component {
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
        }
      ])
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{}}>
            <View style={styles.itemImageStyle}>
              <Image
                style={{ height: 250, width: Dimensions.get("window").width }}
                source={require("../Images/food2.png")}
              />
              <TouchableOpacity
                style={styles.backImageStyle}
                onPress={() => this.props.navigation.pop()}
              >
                <Image
                  style={styles.backImageStyle}
                  source={require("../Images/leftarrow.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerSectionStyle}>
              <View style={styles.headerSubSectionStyle}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold"
                  }}
                >
                  BlackSmith Cafe
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: "#ffcc2a",
                  margin: 10
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    width: 50,
                    fontWeight: "bold",
                    textAlign: "center",
                    textAlignVertical: "center",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  4.3
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 30,
                marginRight: 30
              }}
            >
              <View style={styles.headerControlStyle}>
                <TouchableOpacity
                  style={styles.headerControlStyle}
                  onPress={() => this.props.navigation.pop()}
                >
                  <Image source={require("../Images/sharectr.png")} />
                  <Text style={styles.headerControlSubTitleStyle}>Share</Text>
                  <Text style={styles.headerControlTitleStyle}>603</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.headerControlStyle}>
                <TouchableOpacity
                  style={styles.headerControlStyle}
                  onPress={() => this.props.navigation.pop()}
                >
                  <Image source={require("../Images/starstr.png")} />
                  <Text style={styles.headerControlSubTitleStyle}>Review</Text>
                  <Text style={styles.headerControlTitleStyle}>953</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.headerControlStyle}>
                <TouchableOpacity
                  style={styles.headerControlStyle}
                  onPress={() => this.props.navigation.pop()}
                >
                  <Image source={require("../Images/camerastr.png")} />
                  <Text style={styles.headerControlSubTitleStyle}>Photos</Text>
                  <Text style={styles.headerControlTitleStyle}>115</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.headerControlStyle}>
                <TouchableOpacity
                  style={styles.headerControlStyle}
                  onPress={() => this.props.navigation.pop()}
                >
                  <Image source={require("../Images/bookmarctr.png")} />
                  <Text style={styles.headerControlSubTitleStyle}>
                    Bookmark
                  </Text>
                  <Text style={styles.headerControlTitleStyle}>1478</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mapViewStyle}>
              <MapView
                style={styles.mapViewStyle}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
              />
              <Text style={styles.addressStyle}>
                123 Queen Street, Sydney{"\n"}Australian, Cafe{"\n"}11:00AM to
                11:30PM
              </Text>
            </View>
            <View alignSelf="auto">
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={{ color: "#ffffff", fontSize: 17 }}>
                  {" "}
                  Order Food Online{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headerSectionStyle}>
              <View style={styles.headerSubSectionStyle}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold"
                  }}
                >
                  BlackSmith Cafe
                </Text>
              </View>
              <View
                style={{
                  margin: 10
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={{ color: "#4c7f7f", fontSize: 16 }}>
                    +Add new photo
                  </Text>
                </TouchableOpacity>
              </View>
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
                        <Text
                          style={{
                            marginLeft: 10,
                            textAlign: "center"
                          }}
                        >
                          {data.name}
                        </Text>
                        <Text style={{ marginLeft: 10, textAlign: "center" }}>
                          ({data.count})
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={styles.headerSectionStyle}>
              <View style={styles.headerSubSectionStyle}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold"
                  }}
                >
                  Details
                </Text>
              </View>
              <View
                style={{
                  margin: 10
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={{ color: "#4c7f7f", fontSize: 16 }}>
                    +Read All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerSectionStyle}>
              <View style={styles.headerSubSectionStyle}>
                <Text style={styles.headerSectionTitleStyle}>Call</Text>
              </View>
              <View
                style={{
                  margin: 10
                }}
              >
                <TouchableOpacity activeOpacity={0.5}>
                  <Text style={{ color: "#4c7f7f", fontSize: 16 }}>
                    (+61)23384567
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerSectionStyle}>
              <View style={styles.headerSubSectionStyle}>
                <Text style={styles.headerSectionTitleStyle}>Cuisines</Text>
              </View>
              <View
                style={{
                  margin: 10
                }}
              >
                <TouchableOpacity activeOpacity={0.5}>
                  <Text style={{ color: "#4c7f7f", fontSize: 16 }}>
                    Australian, Cafe
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerSectionStyle}>
              <View style={styles.headerSubSectionStyle}>
                <Text style={styles.headerSectionTitleStyle}>Average Cost</Text>
              </View>
              <View
                style={{
                  margin: 10
                }}
              >
                <TouchableOpacity activeOpacity={0.5}>
                  <Text style={{ color: "#4c7f7f", fontSize: 16 }}>
                    20$ - 50$
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <CustomReviewTemplate />
            <CustomReviewTemplate />
            <CustomReviewTemplate />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemImageStyle: {
    height: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    marginTop: 0,
    width: Dimensions.get("window").width,
    backgroundColor: "red"
  },
  backImageStyle: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 10,
    top: 20
  },
  headerControlStyle: {
    alignItems: "center",
    alignContent: "center"
  },
  headerControlTitleStyle: {
    color: "#4c7f7f"
  },
  headerControlSubTitleStyle: {
    color: "#333333",
    fontSize: 13
  },
  mapViewStyle: {
    width: Dimensions.get("window").width,
    height: 150,
    marginTop: 5,
    marginBottom: 10
  },
  addressStyle: {
    position: "absolute",
    left: 10,
    top: 20,
    color: "gray"
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
  addImageStyle: {
    width: 100,
    height: 80,
    borderRadius: 5,
    overflow: "hidden"
  },
  headerSectionStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  headerSubSectionStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "flex-start",
    marginLeft: 10
  },
  headerSectionTitleStyle: {
    color: "gray",
    fontSize: 16
  }
});
