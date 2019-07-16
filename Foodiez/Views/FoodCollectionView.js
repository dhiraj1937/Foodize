import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import GridView from "react-native-easy-grid-view";
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

export default class FoodCollectionView extends Component {
  constructor(props) {
    super(props);
    var ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithCells(
        [
          {
            image: require("../Images/food1.png"),
            title: "Greek Style",
            subtitle: "35 Pices"
          },
          {
            image: require("../Images/food2.png"),
            title: "Burgers",
            subtitle: "12 Pices"
          },
          {
            image: require("../Images/food3.png"),
            title: "Health",
            subtitle: "12 Pices"
          },
          {
            image: require("../Images/food4.png"),
            title: "See Food",
            subtitle: "12 Pices"
          },
          {
            image: require("../Images/food5.png"),
            title: "Greek Style",
            subtitle: "35 Pices"
          },
          {
            image: require("../Images/food4.png"),
            title: "See Food",
            subtitle: "12 Pices"
          }
        ],
        2
      ),
      cellWidth: 0,
      cellHeight: 0
    };
  }

  clickedItemText(clickedItemValue) {
    this.props.navigation.navigate("FoodDetail", {
      item: clickedItemValue
    });
  }
  _renderCell(cell) {
    return (
      <View
        onLayout={event => {
          var width = event.nativeEvent.layout.width;
          if (this.state.cellWidth != width) {
            this.setState({ cellWidth: width });
          }
          if (this.state.cellHeight != width) {
            this.setState({ cellHeight: width + 50 });
          }
        }}
      >
        <View
          style={{
            width: this.state.cellWidth,
            height: this.state.cellHeight,
            justifyContent: "center",
            borderRadius: 10,
            resizeMode: "stretch"
          }}
          source={cell.image}
        >
          <View
            style={{
              width: this.state.cellWidth,
              height: this.state.cellHeight,
              justifyContent: "center",
              borderRadius: 10,
              resizeMode: "stretch",
              overflow: "hidden"
            }}
          >
            <Image
              style={{
                width: this.state.cellWidth,
                height: this.state.cellHeight
              }}
              source={cell.image}
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
              {cell.title}
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
              {cell.subtitle}
            </Text>
          </View>
        </View>
      </View>
    );
  }

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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image
                style={styles.backImageStyle}
                source={require("../Images/leftarrow.png")}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  marginLeft: 10,
                  fontWeight: "bold"
                }}
              >
                Collection
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  marginLeft: 10
                }}
              >
                By Jacky West
              </Text>
            </View>
          </View>
        </View>
        <GridView
          dataSource={this.state.dataSource}
          removeClippedSubviews={false}
          spacing={8}
          style={{ padding: 16 }}
          renderCell={this._renderCell.bind(this)}
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
  }
});
