import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import { FilterPopupView } from "../CustomViews/FilterPopupView";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

export default class BookMarksView extends Component {
  constructor(props) {
    super(props);
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
      ]),
      IsShowPopup: false
    };
  }

  showScaleAnimationDialog = () => {
    this.setState({ IsShowPopup: true });
  };

  onSearch = searchText => {
    return new Promise((resolve, reject) => {
      console.log(searchText);
      console.log("Add your search function here.");
      resolve();
    });
  };

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "white"
          }}
        >
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 10
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 10 }}
              source={require("./../Images/bookmark.png")}
            />
            <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>
              Bookmark
            </Text>
          </View>
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
              justifyContent: "flex-end",
              flex: 0,
              flexDirection: "row",
              fontSize: 18,
              backgroundColor: "#f5f5f5",
              marginBottom: 2
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 10,
                marginBottom: 10,
                marginRight: 10
              }}
              onPress={this.showScaleAnimationDialog}
            >
              <Text
                style={{ marginLeft: 10, fontWeight: "bold", color: "#4c7f7f" }}
              >
                Filter
              </Text>
            </TouchableOpacity>
          </View>

          <ListView
            dataSource={this.state.dataSource}
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
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        marginBottom: 10
                      }}
                    >
                      <Text
                        style={{
                          color: "gray",
                          fontSize: 10,
                          flex: 0,
                          flexWrap: "wrap",
                          width: Dimensions.get("window").width - 200,
                          marginBottom: 10
                        }}
                      >
                        11:30 AM to 11PM
                      </Text>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 13,
                          fontWeight: "bold",
                          flex: 0,
                          flexWrap: "wrap",
                          width: Dimensions.get("window").width - 200,
                          marginBottom: 10
                        }}
                      >
                        Good Thai
                      </Text>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: 10,
                          flex: 0,
                          flexWrap: "wrap",
                          width: Dimensions.get("window").width - 200
                        }}
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
          <FilterPopupView
            IsShowPopup={this.state.IsShowPopup}
            onClose={() => {
              this.setState({ IsShowPopup: false });
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#f8f8ff",
    marginTop: 10
  },

  SearchBarStyle: {
    backgroundColor: "white"
  },
  SearchBarInputContainerStyle: {
    backgroundColor: "#f5f5f5"
    //fontSize: 16
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
  }
});
