import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import MapView from "react-native-maps";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView
} from "react-native";

export default class ReviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerImage: require("./../Images/mapmarker.png"),
      IsList: false,
      IsShowList: false,
      IsShowMap: true
    };
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

  _onChangeViewType() {
    if (this.state.IsList == false) {
      this.setState({ IsList: true });
    } else {
      this.setState({ IsList: false });
    }
    if (this.state.IsList == false) {
      this.setState({ headerImage: require("./../Images/list.png") });
      this.setState({ IsShowList: false });
      this.setState({ IsShowMap: true });
    } else {
      this.setState({ headerImage: require("./../Images/mapmarker.png") });
      this.setState({ IsShowList: true });
      this.setState({ IsShowMap: false });
    }
  }

  componentDidMount() {
    this.setState({ IsList: true });
    this._onChangeViewType();
  }

  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 50,
            marginLeft: 20
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("../Images/leftarrow.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Reviews</Text>
        </View>
        <View style={{ marginLeft: 50 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "gray"
            }}
          >
            Good Thai
          </Text>
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
          <View
            style={{
              position: "absolute",
              top: 10,
              width: Dimensions.get("window").width
            }}
          >
            <SearchBar
              round
              searchIcon={{ size: 24 }}
              placeholder="Search for restaurants..."
              lightTheme={true}
              containerStyle={styles.SearchBarStyle}
              inputContainerStyle={styles.SearchBarInputContainerStyle}
            />
            <View
              style={{
                alignContent: "center",
                backgroundColor: "#f5f5f5"
              }}
            />
          </View>
        </View>
        <View>
          <View style={styles.listItemStyle}>
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                backgroundColor: "#fff",
                height: 200,
                width: Dimensions.get("window").width,
                justifyContent: "flex-start",
                marginTop: 10
              }}
            >
              <Image
                source={require("./../Images/food2.png")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                  borderColor: "#f5f5f5",
                  borderWidth: 1,
                  marginLeft: 10,
                  marginTop: 10
                }}
              />
              <View
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  width: "50%"
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 10,
                    height: 30
                  }}
                >
                  11:30 AM to 11PM
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 13,
                    fontWeight: "bold",
                    height: 30
                  }}
                >
                  Good Thai
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 10,
                    height: 30,
                    width: 100,
                    flexWrap: "wrap"
                  }}
                >
                  20 Queen street, NSW Asian, Thai
                </Text>
                <View
                  style={{
                    left: "0%",
                    marginTop: 5
                  }}
                >
                  <View
                    style={{
                      flex: 0,
                      flexDirection: "row"
                    }}
                  >
                    <View>
                      <TouchableOpacity>
                        <Image
                          style={{ width: 15, height: 15, marginRight: 10 }}
                          source={require("./../Images/mapmarker.png")}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#4c7f7f",
                          fontSize: 12
                        }}
                      >
                        Open In Apple Maps
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginRight: 15,
                  width: 50
                }}
              >
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: "#ffcc2a",
                    height: 30,
                    alignItems: "center",
                    marginTop: 20
                  }}
                >
                  <Text
                    style={{
                      color: "gray",
                      fontSize: 13,
                      height: 30,
                      width: 50,
                      fontWeight: "bold",
                      textAlign: "center",
                      textAlignVertical: "center",
                      marginTop: 5,
                      marginBottom: 10
                    }}
                  >
                    4.3
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    marginTop: 4
  },
  boxLeftStyle: {
    width: Dimensions.get("window").width / 2.3,
    height: Dimensions.get("window").width / 2.3,
    margin: 12,
    marginTop: 5,
    borderRadius: 5
  },
  boxRightStyle: {
    width: Dimensions.get("window").width / 2.3,
    height: Dimensions.get("window").width / 2.3,
    marginLeft: 5,
    marginRight: 20,
    marginTop: 5,
    borderRadius: 5
  },
  separatorStyle: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  SearchBarStyle: {
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  SearchBarInputContainerStyle: {
    backgroundColor: "#fff",
    fontSize: 16,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  mapViewStyle: {
    width: Dimensions.get("window").width,
    marginTop: 5,
    marginBottom: 10,
    height: (Dimensions.get("window").height * 70) / 100
  },
  listItemStyle: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 0,
    marginBottom: 5,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    height: 200
  },
  boxRightStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2.3,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 5,
    borderRadius: 5
  }
});
