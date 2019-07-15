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

export default class LocationNearByView extends Component {
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
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require("./../Images/leftarrow.png")}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Near By</Text>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity onPress={() => this._onChangeViewType()}>
              <Image
                style={{ width: 20, height: 20, marginRight: 20 }}
                source={this.state.headerImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: 50 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "gray"
            }}
          >
            34 Places
          </Text>
        </View>
        <View style={styles.separatorStyle} />
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 10,
            marginLeft: 20
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require("./../Images/location.png")}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sydney SBD</Text>
        </View>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          placeholder="Search for restaurants..."
          lightTheme={true}
          containerStyle={styles.SearchBarStyle}
          inputContainerStyle={styles.SearchBarInputContainerStyle}
        />
        <ScrollView style={styles.container}>
          {this.state.IsShowList ? (
            <View style={{ hide: this.state.IsShowList }}>
              <ListView
                dataSource={this.state.dataSource}
                separatorStyle="none"
                style={{
                  height: (Dimensions.get("window").height * 70) / 100
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
                          alignItems: "center"
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
                            marginLeft: 10
                          }}
                        />
                        <View
                          style={{
                            justifyContent: "center",
                            marginLeft: 15,
                            marginTop: 10
                          }}
                        >
                          <Text
                            style={{ color: "gray", fontSize: 10, height: 30 }}
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
                            style={{ color: "gray", fontSize: 10, height: 30 }}
                          >
                            20 Queen street, NSW Asian, Thai
                          </Text>
                        </View>
                        <View
                          style={{
                            alignContent: "flex-end",
                            marginLeft: 15,
                            alignItems: "center"
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
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "flex-end",
                              height: 80
                            }}
                          >
                            <Image
                              source={require("./../Images/bookmarkgreen.png")}
                              style={{
                                width: 20,
                                height: 20
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          ) : null}
          {this.state.IsShowMap ? (
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
            </View>
          ) : null}
        </ScrollView>
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
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20
  },
  SearchBarInputContainerStyle: {
    backgroundColor: "#f5f5f5",
    fontSize: 16
  },
  mapViewStyle: {
    width: Dimensions.get("window").width,
    marginTop: 0,
    marginBottom: 10,
    height: (Dimensions.get("window").height * 70) / 100
  },
  listItemStyle: {
    flexDirection: "row",
    marginLeft: 15,
    alignContent: "center",
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff"
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
