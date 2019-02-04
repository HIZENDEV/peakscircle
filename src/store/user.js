import {observable, action, autorun} from 'mobx'
import firebase from "react-native-firebase"

class User {
  @observable current = {};
  @observable mates = {};
  @observable loading = true;
  @observable counter = 0;

  constructor() {
    this.current = firebase.auth().currentUser
    this.loading = false
    console.log("user: ", this.current, "loading: ", this.loading);
  }

  getAllUsers = async () => {
    this.loading = true
    let users = await firebase.database().ref("users").once("value")
    this.mates = await users.val()
    console.log(this.mates)
    this.loading = false
    return this.mates
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  @action
  setUser = userInfo => {
    this.current = userInfo;
  };
}

export default new User()
