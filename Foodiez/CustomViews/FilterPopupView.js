import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import CheckBox from "react-native-check-box";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
import PopupDialog, {
  ScaleAnimation,
  DialogContent
} from "react-native-popup-dialog";
import { ScrollView } from "react-native-gesture-handler";
const scaleAnimation = new ScaleAnimation();

export class FilterPopupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsShowPopup: false,
      checked: true,
      FilterArray: [
        { key: "Open Now", IsChecked: false, IsQuickFilter: true },
        { key: "Rated 4+", IsChecked: false, IsQuickFilter: true },
        { key: "Rated 3+", IsChecked: false, IsQuickFilter: true },
        { key: "Nearest to me", IsChecked: true, IsQuickFilter: false },
        { key: "Cost low to high", IsChecked: false, IsQuickFilter: false },
        { key: "Cost high to low", IsChecked: false, IsQuickFilter: false }
      ]
    };
  }

  _onReset = () => {
    this.state.FilterArray[0].IsChecked = false;
    this.state.FilterArray[1].IsChecked = false;
    this.state.FilterArray[2].IsChecked = false;
    this.state.FilterArray[3].IsChecked = true;
    this.state.FilterArray[4].IsChecked = false;
    this.state.FilterArray[5].IsChecked = false;
    this.state.checked = true;
    this.setState({ FilterArray: this.state.FilterArray });
  };

  render() {
    return (
      <PopupDialog
        visible={this.props.IsShowPopup}
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
            <TouchableOpacity activeOpacity={0.5} onPress={this._onReset}>
              <Text style={{ color: "#4c7f7f", fontSize: 15 }}> Reset </Text>
            </TouchableOpacity>
          </View>
        </View>

        <DialogContent style={styles.dialogContentViewStyle}>
          <ScrollView>
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
                <Text style={{ fontSize: 15 }}>
                  {this.state.FilterArray[0].key}
                </Text>
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
                    this.state.FilterArray[0].IsChecked = !this.state
                      .FilterArray[0].IsChecked;
                    this.setState({ FilterArray: this.state.FilterArray });
                  }}
                  isChecked={this.state.FilterArray[0].IsChecked}
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
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>
                  {this.state.FilterArray[1].key}
                </Text>
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
                    this.state.FilterArray[1].IsChecked = !this.state
                      .FilterArray[1].IsChecked;
                    this.setState({ FilterArray: this.state.FilterArray });
                  }}
                  isChecked={this.state.FilterArray[1].IsChecked}
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
            <View style={styles.dialogContentView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 15 }}>
                  {this.state.FilterArray[2].key}
                </Text>
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
                    this.state.FilterArray[2].IsChecked = !this.state
                      .FilterArray[2].IsChecked;
                    this.setState({ FilterArray: this.state.FilterArray });
                  }}
                  isChecked={this.state.FilterArray[2].IsChecked}
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
                <Text style={{ fontSize: 15 }}>
                  {this.state.FilterArray[3].key}
                </Text>
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
                      checked: true
                    });
                    this.state.FilterArray[3].IsChecked = this.state.checked;
                    this.state.FilterArray[4].IsChecked = !this.state.checked;
                    this.state.FilterArray[5].IsChecked = !this.state.checked;
                  }}
                  isChecked={this.state.FilterArray[3].IsChecked}
                  unCheckedImage={
                    <Image source={require("../Images/uncheckRadio.png")} />
                  }
                  checkedImage={
                    <Image source={require("../Images/checkedRadio.png")} />
                  }
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
                <Text style={{ fontSize: 15 }}>
                  {this.state.FilterArray[4].key}
                </Text>
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
                      checked: true
                    });
                    this.state.FilterArray[4].IsChecked = this.state.checked;
                    this.state.FilterArray[5].IsChecked = !this.state.checked;
                    this.state.FilterArray[3].IsChecked = !this.state.checked;
                  }}
                  isChecked={this.state.FilterArray[4].IsChecked}
                  unCheckedImage={
                    <Image source={require("../Images/uncheckRadio.png")} />
                  }
                  checkedImage={
                    <Image source={require("../Images/checkedRadio.png")} />
                  }
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
                <Text style={{ fontSize: 15 }}>
                  {this.state.FilterArray[5].key}
                </Text>
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
                      checked: true
                    });
                    this.state.FilterArray[5].IsChecked = this.state.checked;
                    this.state.FilterArray[3].IsChecked = !this.state.checked;
                    this.state.FilterArray[4].IsChecked = !this.state.checked;
                  }}
                  isChecked={this.state.FilterArray[5].IsChecked}
                  unCheckedImage={
                    <Image source={require("../Images/uncheckRadio.png")} />
                  }
                  checkedImage={
                    <Image source={require("../Images/checkedRadio.png")} />
                  }
                />
              </View>
            </View>
            <View style={styles.separatorStyle} />

            <View>
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "gray" }]}
                activeOpacity={0.5}
                onPress={() => this.props.onClose()}
              >
                <Text style={{ color: "white", fontSize: 17 }}> Apply </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: "#fff" }]}
                activeOpacity={0.5}
                onPress={() => this.props.onClose()}
              >
                <Text style={{ color: "gray", fontSize: 17 }}> Cancel </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </DialogContent>
      </PopupDialog>
    );
  }
}
FilterPopupView.PropTypes = {
  IsShowPopup: PropTypes.bool,
  onClose: PropTypes.func
};
const styles = StyleSheet.create({
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
      (Dimensions.get("window").width * 10) / 100
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
