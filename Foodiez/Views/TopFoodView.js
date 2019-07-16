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
  ListView,
  TextInput
} from "react-native";

export default class TopFoodView extends Component {
  constructor(props) {
    super(props);

    this.state = { colorTab1: "#4c7f7f", colorTab2: "#000", colorTab3: "#000" };
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: "United States",
          icon: require("../Images/CountryFlags/usa.png")
        },
        {
          name: "Australia",
          icon: require("../Images/CountryFlags/australia.png")
        },
        {
          name: "France",
          icon: require("../Images/CountryFlags/france.png")
        },
        {
          name: "Korean",
          icon: require("../Images/CountryFlags/northkorea.png")
        },
        {
          name: "Brazil",
          icon: require("../Images/CountryFlags/brazil.png")
        },
        {
          name: "Canada",
          icon: require("../Images/CountryFlags/canada.png")
        },
        {
          name: "Japan",
          icon: require("../Images/CountryFlags/Japan.png")
        }
      ])
    };
  }

  componentDidMount() {
    this._onSelectedTab(0);
  }

  _onSelectedTab(index) {
    this.setState({ colorTab1: "#000" });
    this.setState({ colorTab2: "#000" });
    this.setState({ colorTab3: "#000" });
    if (index == 0) {
      this.setState({ colorTab1: "#4c7f7f" });
    } else if (index == 1) {
      this.setState({ colorTab2: "#4c7f7f" });
    } else if (index == 2) {
      this.setState({ colorTab3: "#4c7f7f" });
    }
  }

  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "flex-start",
            flexDirection: "row",
            flex: 0,
            marginLeft: 20,
            marginTop: 50
          }}
        >
          <TouchableOpacity>
            <Image
              style={styles.backImageStyle}
              source={require("../Images/trophy.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
            Top Foodies
          </Text>
        </View>
        <View style={styles.headerSeperatorStyle} />
        <View style={styles.topHeaderTabStyle}>
          <TouchableOpacity
            onPress={() => this._onSelectedTab(0)}
            style={styles.tabTouchableStyle}
          >
            <Text
              ref={ref => (this.txtTitleTab1 = ref)}
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: this.state.colorTab1
              }}
            >
              Reviews
            </Text>
            <Text
              ref={"txtCountTab1"}
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: this.state.colorTab1
              }}
            >
              (100)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onSelectedTab(1)}
            style={styles.tabTouchableStyle}
          >
            <Text
              ref={"txtTitleTab2"}
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: this.state.colorTab2
              }}
            >
              Photos
            </Text>
            <Text
              ref={"txtCountTab2"}
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: this.state.colorTab2
              }}
            >
              (100)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onSelectedTab(2)}
            style={styles.tabTouchableStyle}
          >
            <Text
              ref={"txtTitleTab3"}
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: this.state.colorTab3
              }}
            >
              Bloggers
            </Text>
            <Text
              ref={"txtCountTab3"}
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: this.state.colorTab3
              }}
            >
              (100)
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ marginTop: 0, backgroundColor: "lightgray", height: 2 }}
        />
        <ListView
          dataSource={this.state.dataSource}
          separatorStyle="none"
          style={{
            height: (Dimensions.get("window").height * 68) / 100,
            marginTop: 10
          }}
          renderRow={data => (
            <View
              style={{
                alignContent: "center",
                backgroundColor: "#f5f5f5"
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
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 13,
                        flex: 0,
                        flexWrap: "wrap",
                        marginTop: 10,
                        width: Dimensions.get("window").width - 160
                      }}
                    >
                      Gold Foodies
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
          )}
        />
      </View>
    );
  }
}

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
  }
});
