import { autorun, observable, computed, action } from "mobx"
import firebase from 'react-native-firebase'

class surveyStore {
  @observable polls = {};
  @observable loading = true;

  reaction = autorun(async () => {
    const survey = await firebase
      .database()
      .ref("survey")
      .once("value");
    this.polls = survey.val();
    this.loading = false
    console.log("autorun: ", this.polls, "loading: ", this.polls);
  });

}

export default new surveyStore();
