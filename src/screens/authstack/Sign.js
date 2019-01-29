import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { sign as styles } from "@styles/Index";
import * as auth from "@services/Auth";
import Status from '@components/Status'

export default class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigninInProgress: false
    };
  }

  _signIn = async () => {
      if (this.state.isSigninInProgress) {
        return false
      }
    try {
      this.setState({ isSigninInProgress: true })
      await auth.signIn();
      this.props.navigation.navigate("App");
    } catch (e) {
      this.setState({ isSigninInProgress: false })
      alert("Something goes wrong!");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Status backgroundColor={'#FFC55C'} barStyle={'light-content'} />
        <Image
          source={require("@assets/intro.png")}
          style={styles.top}
        />
        <View style={styles.container}>
          <TouchableOpacity onPress={this._signIn} style={styles.signInButton}>
            <View style={styles.innerButton}>
              <Image
                source={require("@assets/sign.png")}
                style={styles.iconButton}
              />
            </View>
            <Text style={styles.textButton}>Sign in as employee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => auth.signIn(true)}
            style={styles.signInButton}
          >
            <View style={styles.innerButton}>
              <Image
                source={require("@assets/sign.png")}
                style={styles.iconButton}
              />
            </View>
            <Text style={styles.textButton}>Sign in as an outsider</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.alpha}>
          <Text style={styles.textAlpha}>Get started.</Text>
          <Text style={styles.textAlpha}>It's free and easy</Text>
        </View>
      </React.Fragment>
    );
  }
}
