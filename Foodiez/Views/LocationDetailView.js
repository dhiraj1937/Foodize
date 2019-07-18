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
          name: "Most Popular",
          icon: require("../Images/CountryFlags/usa.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food1.png") },
            { img: require("../Images/food1.png") },
            { img: require("../Images/food1.png") }
          ])
        },
        {
          name: "Trending this week",
          icon: require("../Images/CountryFlags/australia.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food2.png") },
            { img: require("../Images/food2.png") },
            { img: require("../Images/food2.png") }
          ])
        },
        {
          name: "Meal Deals",
          icon: require("../Images/CountryFlags/france.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food3.png") },
            { img: require("../Images/food3.png") },
            { img: require("../Images/food3.png") }
          ])
        },
        {
          name: "Favorites Cuisines",
          icon: require("../Images/CountryFlags/northkorea.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food4.png") },
            { img: require("../Images/food4.png") },
            { img: require("../Images/food4.png") }
          ])
        },
        {
          name: "Papular Restaurants",
          icon: require("../Images/CountryFlags/brazil.png"),
          foods: dsInside.cloneWithRows([
            { img: require("../Images/food5.png") },
            { img: require("../Images/food5.png") },
            { img: require("../Images/food5.png") }
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
    this.props.navigation.navigate("FoodDetail", {
      item: clickedItemValue
    });
  }

  _renderCell = cell => {
    return (
      <View>
        <View
          style={{
            width: 160,
            height: 170,
            justifyContent: "center",
            borderRadius: 10,
            resizeMode: "stretch"
          }}
        >
          <View
            style={{
              width: 160,
              height: 170,
              justifyContent: "center",
              borderRadius: 10,
              resizeMode: "stretch",
              overflow: "hidden"
            }}
          >
            <Image style={{ width: 160, height: 170 }} source={cell.img} />
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
              Test
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
              Test
            </Text>
          </View>
        </View>
      </View>
    );
  };

  _renderCellForPopularRes = cell => {
    return (
      <View style={{ alignContent: "center" }}>
        <View>
          <View style={styles.addImageStyle}>
            <Image source={cell.img} />
          </View>
          <Text
            style={{
              marginLeft: 10,
              textAlign: "center"
            }}
          />
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
              <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    fontWeight: "bold",
                    marginLeft: 20,
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
                    marginRight: 20
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("FoodCollection")
                  }
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
                  height: 190,
                  marginLeft: 5,
                  marginRight: 5
                }}
                renderRow={data => (
                  <TouchableOpacity
                    style={{ padding: 15 }}
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
                        bgColor1="blue"
                        bgColor2="green"
                        style={{ height: 170 }}
                      />
                    ) : (
                      <View style={styles.listItemStyle}>
                        <View>
                          <View style={styles.itemImageStyle}>
                            <Image
                              style={{ width: 160, height: 110 }}
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
    height: 170,
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
    width: 160,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden"
  },
  addImageStyle: {
    width: 160,
    height: 170,
    borderRadius: 5,
    overflow: "hidden"
  }
});
