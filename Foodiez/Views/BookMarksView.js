import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import CheckBox from "react-native-check-box";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
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

import PopupDialog, {
  DialogTitle,
  DialogButton,
  ScaleAnimation,
  DialogContent
} from "react-native-popup-dialog";
const scaleAnimation = new ScaleAnimation();
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
      IsShowPopup: false,
      checked: false
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
                {/* <Image style={styles.backImageStyle} source={data.icon} />
                <Text style={{ marginLeft: 10 }}>{data.name}</Text> */}
              </View>
            </View>
          )}
        />
        <PopupDialog
          visible={this.state.IsShowPopup}
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
          dialogAnimation={scaleAnimation}
          actions={[<View />]}
        >
          <View
            style={[styles.dialogContentView, { backgroundColor: "#f5f5f5" }]}
          >
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "center",
                marginRight: 10,
                marginLeft: 10
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Filter</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
                marginRight: 10
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.setState({ IsShowPopup: false })}
              >
                <Text style={{ color: "#4c7f7f", fontSize: 15 }}> Reset </Text>
              </TouchableOpacity>
            </View>
          </View>

          <DialogContent style={styles.dialogContentViewStyle}>
            <Text style={{ color: "gray", fontSize: 15, marginTop: 20 }}>
              Quick Filter
            </Text>
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>Open Now</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    this.setState({
                      checked: !this.state.checked
                    });
                  }}
                  isChecked={this.state.checked}
                />
              </View>
            </View>
            <View style={styles.separatorStyle} />
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>Rated 4+</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    this.setState({
                      checked: !this.state.checked
                    });
                  }}
                  isChecked={this.state.checked}
                />
              </View>
            </View>
            <View style={styles.separatorStyle} />
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>Rated 3+</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    this.setState({
                      checked: !this.state.checked
                    });
                  }}
                  isChecked={this.state.checked}
                  unCheckedImage={
                    <Image source={require("../Images/uncheckbox.png")} />
                  }
                  checkedImage={
                    <Image source={require("../Images/checkbox.png")} />
                  }
                />
              </View>
            </View>
            <View style={styles.separatorStyle} />

            <Text style={{ color: "gray", fontSize: 15, marginTop: 20 }}>
              Sort By
            </Text>
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>Nearest to me</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                {/* <RadioButton value={"item1"}>
                  <Text>This is item #1</Text>
                </RadioButton> */}
              </View>
            </View>
            <View style={styles.separatorStyle} />
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>Cost high to low</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    this.setState({
                      checked: !this.state.checked
                    });
                  }}
                  isChecked={this.state.checked}
                />
              </View>
            </View>
            <View style={styles.separatorStyle} />
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>Cost low to height</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    this.setState({
                      checked: !this.state.checked
                    });
                  }}
                  isChecked={this.state.checked}
                />
              </View>
            </View>
            <View style={styles.separatorStyle} />

            <View>
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "gray" }]}
                activeOpacity={0.5}
                onPress={() => this.setState({ IsShowPopup: false })}
              >
                <Text style={{ color: "white", fontSize: 17 }}> Apply </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "#fff" }]}
                activeOpacity={0.5}
                onPress={() => this.setState({ IsShowPopup: false })}
              >
                <Text style={{ color: "gray", fontSize: 17 }}> Cancel </Text>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </PopupDialog>
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
    height: 120,
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
  },
  dialogContentView: {
    flex: 0,
    flexDirection: "row",
    height: 50
  },
  dialogContentViewStyle: {
    height:
      Dimensions.get("window").height -
      (Dimensions.get("window").height * 30) / 100,
    width:
      Dimensions.get("window").width -
      (Dimensions.get("window").width * 10) / 100,
    backgroundColor: "#dfdf"
  },
  buttonStyle: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffcc",

    marginTop: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  separatorStyle: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    marginLeft: 0,
    marginRight: 0
  }
});
