import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { signIn, signOut } from '@services/Auth';

export default class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigninInProgress: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <Image source={require("@assets/intro_x3.png")} style={{width: '100%'}} />
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={signIn}
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "50%",
              height: "20%",
              marginBottom: "3%",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                padding: 5,
                marginRight: '8%',
                borderRadius: 30,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 0.16
              }}
            >
              <Image
                source={require("@assets/sign.png")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain"
                }}
              />
            </View>
            <Text>Sign in as employee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={signOut}
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "50%",
              height: "20%"
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                padding: 5,
                marginRight: '8%',
                borderRadius: 30,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 0.16
              }}
            >
              <Image
                source={require("@assets/sign.png")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain"
                }}
              />
            </View>
            <Text>Sign in as an outsider</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: '10%'
          }}
        >
          <Text>Get started.</Text>
          <Text>It's free and easy</Text>
        </View>
      </React.Fragment>
    );
  }
}
