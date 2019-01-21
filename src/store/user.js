import {observable, action, autorun} from 'mobx'
import firebase from "react-native-firebase"

class UserStore {
  @observable user = {};
  @observable mates = {};
  @observable loading = true;
  @observable counter = 0;

  reaction = autorun(async () => {
    const user = await firebase.auth().currentUser;
    this.user = user
    this.loading = false
    console.log("user: ", this.user, "loading: ", this.loading);
  });


  getAllUsers = async () => {
    this.loading = true
    let users = await firebase.database().ref("users").once("value")
    this.mates = await users.val()
    console.log(this.mates)
    this.loading = false
    return this.mates
  }

  constructor() {}

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  @action
  setUser = userInfo => {
    this.user = userInfo;
  };
}

export default new UserStore()
