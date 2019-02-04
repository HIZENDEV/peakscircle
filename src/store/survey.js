import { autorun, observable} from "mobx"
import firebase from 'react-native-firebase'

class survey {
  @observable polls = {};
  @observable loading = true;

  constructor() {
    this.loading = true
    firebase.database().ref('survey').on('value', (snapshot) => {
      this.polls = snapshot.val()
      this.loading = false
      console.log("survey: ", this.polls, "loading: ", this.loading)
    })
  }
}

export default new survey();
