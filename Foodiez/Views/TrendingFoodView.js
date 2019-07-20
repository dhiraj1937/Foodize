import React, { Component } from "react";
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
    ScrollView,
    SafeAreaView
} from "react-native";
import { List } from "react-native-paper";

export default class TrendingFoodView extends Component {
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
            ,
            IsShowPopup: false
        };
    }

    showScaleAnimationDialog = () => {
        this.setState({ IsShowPopup: true });
    };

    render() {
        return (
            <SafeAreaView>
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.itemImageStyle}>
                            <Image
                                style={{ height: 300, width: Dimensions.get("window").width }}
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
                            <TouchableOpacity
                                style={styles.ShareImageStyle}
                                onPress={() => this.props.navigation.pop()}
                            >
                                <Text
                                    style={{
                                        marginLeft: 0,
                                        fontWeight: "bold",
                                        color: "#fff"
                                    }}
                                >
                                    Share
                </Text>
                            </TouchableOpacity>
                            
                           
                        </View>
                        <View><Text
                            style={{
                                fontSize: 30,
                                color: "black",
                                fontWeight: "bold",
                                textAlign: "left",
                                marginLeft:15,
                                marginTop:10
                            }}
                        >
                            Trending
                </Text></View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                fontSize: 18,
                                backgroundColor: "#f5f5f5",
                                marginBottom: 2,
                                alignItems: "center"
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        marginLeft: 15,
                                        fontWeight: "bold",
                                        fontSize: 18
                                    }}
                                >
                                    20 Restaurants
                </Text>
                            </View>
                            <View
                                style={{
                                    marginTop: 20,
                                    marginBottom: 20,
                                    marginRight: 10,
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <TouchableOpacity onPress={this.showScaleAnimationDialog}>
                                    <Text
                                        style={{
                                            marginLeft: 10,
                                            fontWeight: "bold",
                                            color: "#4c7f7f"
                                        }}
                                    >
                                        Filter
                  </Text>
                                </TouchableOpacity>
                            </View>
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
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
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
    container:{
        backgroundColor: "#f5f5f5"
    },
    itemImageStyle: {
        height: 250,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
        marginTop: 0,
        width: Dimensions.get("window").width,
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row"
    },
    backImageStyle: {
        width: 25,
        height: 25,
        position: "absolute",
        left: 10,
        top: 20
    },
    ShareImageStyle: {
        width: 100,
        height: 25,
        position: "absolute",
        right: 0,
        top: 40,
        alignItems: "center",
        justifyContent: "center",
        flex: 0
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
    }
});
