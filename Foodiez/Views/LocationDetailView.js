import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import { CustomCellFav } from "../CustomViews/CustomCellMeals";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

export default class LocationDetailView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        r1 !== r2;
      }
    });
    const dsInside = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          type: 1,
          name: "Most Popular",
          icon: require("../Images/CountryFlags/usa.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food1.png"), type: 1 },
            { img: require("../Images/food1.png"), type: 1 },
            { img: require("../Images/food1.png"), type: 1 }
          ])
        },
        {
          type: 2,
          name: "Trending this week",
          icon: require("../Images/CountryFlags/australia.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food2.png"), type: 2 },
            { img: require("../Images/food2.png"), type: 2 },
            { img: require("../Images/food2.png"), type: 2 }
          ])
        },
        {
          type: 3,
          name: "Meal Deals",
          icon: require("../Images/CountryFlags/france.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food3.png"), type: 3 },
            { img: require("../Images/food3.png"), type: 3 },
            { img: require("../Images/food3.png"), type: 3 }
          ])
        },
        {
          type: 4,
          name: "Favorites Cuisines",
          icon: require("../Images/CountryFlags/northkorea.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food4.png"), type: 4 },
            { img: require("../Images/food4.png"), type: 4 },
            { img: require("../Images/food4.png"), type: 4 }
          ])
        },
        {
          type: 5,
          name: "Papular Restaurants",
          icon: require("../Images/CountryFlags/brazil.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food5.png"), type: 5 },
            { img: require("../Images/food5.png"), type: 5 },
            { img: require("../Images/food5.png"), type: 5 }
          ])
        }
      ])
    };
  }

  onSearch = searchText => {
    return new Promise((resolve, reject) => {
      console.log(searchText);
      console.log("Add your search function here.");
      resolve();
    });
  };
  clickedItemText(clickedItemValue) {
    if (clickedItemValue.type == 4) {
      this.props.navigation.navigate("FavoriteCuisinesView", {
        item: clickedItemValue
      });
    } else {
      this.props.navigation.navigate("FoodDetail", {
        item: clickedItemValue
      });
    }
  }

  _renderCell = cell => {
    return (
      <View>
        <View
          style={{
            width: 180,
            height: 200,
            justifyContent: "center",
            borderRadius: 10,
            resizeMode: "stretch"
          }}
        >
          <View
            style={{
              width: 180,
              height: 200,
              justifyContent: "center",
              borderRadius: 10,
              resizeMode: "stretch",
              overflow: "hidden"
            }}
          >
            <Image
              style={{
                width: 180,
                height: 200,
                borderRadius: 10,
                overflow: "hidden"
              }}
              source={cell.img}
            />
          </View>
          <View
            style={{
              position: "absolute",
              justifyContent: "flex-end",
              bottom: 2
            }}
          >
            <Text
              style={{
                textAlign: "left",
                color: "#fff",
                fontSize: 17,
                marginLeft: 10,
                fontWeight: "bold"
              }}
            >
              Greek Style
            </Text>
            <Text
              style={{
                textAlign: "left",
                color: "#fff",
                fontSize: 12,
                marginLeft: 10,
                fontWeight: "bold"
              }}
            >
              30 Pices
            </Text>
          </View>
        </View>
      </View>
    );
  };

  _renderCellForPopularRes = cell => {
    return (
      <View style={styles.addImageStyle}>
        <View style={styles.addImageStyle}>
          <Image source={cell.img} />
        </View>
      </View>
    );
  };

  render() {
    return (
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
            marginTop: 40,
            marginLeft: 10,
            marginBottom: 10
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image
                style={styles.backImageStyle}
                source={require("../Images/leftarrow.png")}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: "gray", marginLeft: 10 }}>
              Your Location
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Image
                  style={{ width: 20, height: 20, marginRight: 20 }}
                  source={require("../Images/doorbell.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Image
                  style={{ width: 20, height: 20, marginRight: 20 }}
                  source={require("../Images/add.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "#000",
            fontWeight: "bold",
            marginLeft: 50,
            marginBottom: 20
          }}
        >
          {this.props.navigation.state.params.item.name}
        </Text>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          placeholder="Search for restaurants..."
          lightTheme={true}
          containerStyle={styles.SearchBarStyle}
          inputContainerStyle={styles.SearchBarInputContainerStyle}
        />

        <ListView
          dataSource={this.state.dataSource}
          separatorStyle="none"
          removeClippedSubviews={false}
          style={{
            height: (Dimensions.get("window").height * 68) / 100
          }}
          renderRow={dataHeader => (
            <View
              style={{
                alignContent: "center",
                backgroundColor: "#f5f5f5"
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    fontWeight: "bold",
                    marginLeft: 15,
                    marginBottom: 0
                  }}
                >
                  {dataHeader.name}
                </Text>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    marginRight: 15
                  }}
                  onPress={() => {
                    if (dataHeader.type == 2) {
                      this.props.navigation.navigate("TrendingFoodView");
                    } else {
                      this.props.navigation.navigate("FoodCollection");
                    }
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#4c7f7f",
                      marginLeft: 20,
                      marginBottom: 20
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              <ListView
                dataSource={dataHeader.foods}
                separatorStyle="none"
                horizontal={true}
                removeClippedSubviews={false}
                showsHorizontalScrollIndicator={false}
                style={{
                  height: 220,
                  marginLeft: 5,
                  marginRight: 5
                }}
                renderRow={data => (
                  <TouchableOpacity
                    style={{ marginLeft: 10, marginRight: 10 }}
                    activeOpacity={0.4}
                    onPress={this.clickedItemText.bind(this, data)}
                  >
                    {dataHeader.name === "Meal Deals" ? (
                      this._renderCell(data)
                    ) : dataHeader.name === "Papular Restaurants" ? (
                      this._renderCellForPopularRes(data)
                    ) : dataHeader.name === "Favorites Cuisines" ? (
                      <CustomCellFav
                        boxTitle1="Asian"
                        boxTitle2="France"
                        bgColor1="#6495ed"
                        bgColor2="#ffcc2a"
                        style={{ height: 200 }}
                      />
                    ) : (
                      <View style={styles.listItemStyle}>
                        <View>
                          <View style={styles.itemImageStyle}>
                            <Image
                              style={{ width: 180, height: 120 }}
                              source={data.img}
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "bold",
                              marginLeft: 5,
                              marginRight: 5,
                              marginTop: 5,
                              marginBottom: 5
                            }}
                          >
                            KFC Boradway
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              color: "gray",
                              marginLeft: 5,
                              marginRight: 5,
                              marginTop: 5,
                              marginBottom: 15
                            }}
                          >
                            123 Qeen Street, {"\n"}SydneyAustralian Cafe
                          </Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#f8f8ff",
    marginTop: 10
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
  SearchBarStyle: {
    backgroundColor: "white"
  },
  SearchBarInputContainerStyle: {
    backgroundColor: "#f5f5f5",
    fontSize: 16
  },
  listItemStyle: {
    flexDirection: "column",
    marginLeft: 0,
    height: 200,
    alignContent: "flex-start",
    marginRight: 5,
    marginTop: 0,
    marginBottom: 5,
    flex: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  },
  backImageStyle: {
    width: 25,
    height: 25
  },
  itemImageStyle: {
    width: 180,
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden"
  },
  addImageStyle: {
    width: 180,
    height: 200,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 10
  }
});
