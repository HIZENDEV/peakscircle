import { autorun, observable} from "mobx"
import { showMessage } from "react-native-flash-message"

class alert {
  @observable show = {
    message: '',
    type: '',
    display: ''
  }

  reaction = autorun(async () => {
    if (this.show.display) {
      showMessage({
        message: this.show.message,
        type: this.show.type,
      })
      this.show.display = false
    }
  })



}

export default new alert()
