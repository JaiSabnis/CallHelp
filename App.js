import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  Linking,
  Alert,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Text,
} from "react-native";

import {
  CardItem,
  Left,
  Card,
  Body,
  Content,
  Button,
  Icon,
  Right,
} from "native-base";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import DialogInput from "react-native-dialog-input";

import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class App extends React.Component {
  call = (phone) => {
    let phoneNumber = phone;
    if (Platform.OS !== "android") {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Phone functionailty unavailable");
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async componentDidMount() {
    if (Platform.OS === "android") {
      StatusBar.setBarStyle("dark-content", true);
      StatusBar.setBackgroundColor("white");
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Content>
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: "bold" }}>Indian Helplines</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  block
                  large
                  iconLeft
                  style={{
                    backgroundColor: "#3498DB",
                    marginTop: 10,
                    marginBottom: 10,
                    width: width * 0.9,
                    alignSelf: "center",
                    borderRadius: width / 25,
                  }}
                  onPress={() => {
                    this.call(100);
                  }}
                >
                  <MaterialIcons name="security" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Police Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(102);
                  }}
                  success
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <FontAwesome name="ambulance" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Ambulance Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(1075);
                  }}
                  success
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <FontAwesome name="heart" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Covid-19 Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(18602662345);
                  }}
                  block
                  large
                  iconLeft
                  style={styles.btn}
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: width * 0.9,
                    alignSelf: "center",
                    borderRadius: width / 25,
                    backgroundColor: "#8B78E6",
                  }}
                >
                  <MaterialIcons name="healing" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Vandrevala Mental Health Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(25521111);
                  }}
                  block
                  large
                  iconLeft
                  style={{
                    backgroundColor: "#8B78E6",
                    marginTop: 10,
                    marginBottom: 10,
                    width: width * 0.9,
                    alignSelf: "center",
                    borderRadius: width / 25,
                  }}
                >
                  <MaterialIcons name="healing" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    iCall Mental Health Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(1091);
                  }}
                  warning
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <Ionicons name="ios-woman" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Women's Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(181);
                  }}
                  warning
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <Ionicons name="ios-home" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Domestic Abuse Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(1098);
                  }}
                  warning
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <FontAwesome name="child" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Children in Difficulty Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(101);
                  }}
                  danger
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <SimpleLineIcons name="fire" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Fire Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(1078);
                  }}
                  danger
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <Ionicons name="ios-help-buoy" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Disaster Management Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(1072);
                  }}
                  info
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <Ionicons name="ios-train" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Railway Accident Helpline
                  </Text>
                </Button>

                <Button
                  onPress={() => {
                    this.call(1073);
                  }}
                  info
                  block
                  large
                  iconLeft
                  style={styles.btn}
                >
                  <FontAwesome name="road" size={24} color="white" />
                  <Text uppercase={false} style={styles.texter}>
                    Road Accident Helpline
                  </Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? height * 0.05 : 0,
  },
  btn: {
    // backgroundColor: "rgba(3, 40, 252, 0.6)",
    marginTop: 10,
    marginBottom: 10,
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: width / 25,
  },
  contactBtn: {
    width: width * 0.5,
    marginBottom: height * 0.02,
  },
  circle: {
    borderRadius: Math.round(width + height) / 2,
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: "rgba(52, 161, 235, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width * 0.03,
    marginBottom: height * 0.01,
  },
  texter: {
    //textTransform: "lowercase",
    color: "white",
    marginLeft: width * 0.02,
    fontSize: 20,
  },
});
