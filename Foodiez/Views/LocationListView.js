import {
  Platform,
  StyleSheet,
  ListView,
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, { Component } from "react";
export default class LocationListView extends Component {
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
      ])
    };
  }
  clickedItemText(clickedItemValue) {
    this.props.navigation.navigate("LocationDetail", {
      item: clickedItemValue
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "flex-start",
            alignItems: "center",
            marginLeft: 15,
            marginTop: 40,
            flexDirection: "row",
            flex: 0
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Image
              style={styles.backImageStyle}
              source={require("../Images/leftarrow.png")}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
            User Current Location
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Search The City"
            secureTextEntry={true}
          />
          <View style={styles.separatorStyle} />
          <Text
            style={{
              marginLeft: 15,
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 17,
              marginBottom: 10
            }}
          >
            Recently visited countries
          </Text>
        </View>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          separatorStyle="none"
          renderRow={data => (
            <TouchableOpacity
              style={{ padding: 15 }}
              activeOpacity={0.4}
              onPress={this.clickedItemText.bind(this, data)}
            >
              <View style={{ alignContent: "center" }}>
                <View style={styles.listItemStyle}>
                  <Image style={styles.backImageStyle} source={data.icon} />
                  <Text style={{ marginLeft: 10 }}>{data.name}</Text>
                </View>
                <View style={styles.separatorStyle} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},

  header: {
    flex: 0,
    margin: 10,
    backgroundColor: "#ffffff00",
    textAlign: "center",
    fontSize: 25,
    paddingTop: 0,
    fontWeight: "bold",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%"
  },
  headerSub: {
    flex: 0,
    margin: 0,
    backgroundColor: "#ffffff00",
    textAlign: "center",
    fontSize: 17,
    paddingTop: 0,
    fontWeight: "bold",
    marginLeft: "20%",
    marginRight: "20%",
    color: "#d3d3d3"
  },
  containerInside: {
    marginTop: 20
  },
  inputStyle: {
    flex: 0,
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16
  },
  separatorStyle: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10
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
  btnForgetPasswordStyle: {
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 10,
    color: "#33FFC1"
  },
  backImageStyle: {
    width: 25,
    height: 25
  },
  listItemStyle: {
    flexDirection: "row",
    marginLeft: 10,
    height: 50,
    alignContent: "center",
    marginRight: 10,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
