import { autorun, observable} from "mobx"
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
    console.log("survey: ", this.polls, "loading: ", this.loading);
  });

}

export default new surveyStore();
