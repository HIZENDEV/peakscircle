import { autorun, observable } from "mobx"
import firebase from 'react-native-firebase'

class threadStore {
  @observable threads = {};
  @observable loading = true;

  reaction = autorun(async () => {
    const threads = await firebase
      .database()
      .ref("threads")
      .once("value");
    this.threads = threads.val();
    this.loading = false;
    console.log("threads: ", this.threads, "loading: ", this.loading);
  });
}

export default new threadStore()
