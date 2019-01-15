import {observable, action, autorun} from 'mobx'
import firebase from "react-native-firebase"

class UserStore {
  @observable user = {};
  @observable loading = true;
  @observable counter = 0;

  reaction = autorun(async () => {
    const user = await firebase.auth().currentUser;
    this.user = user
    this.loading = false
    console.log("user: ", this.user, "loading: ", this.loading);
  });

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
