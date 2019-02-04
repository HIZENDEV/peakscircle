import { autorun, observable} from "mobx"
import { showMessage, hideMessage } from "react-native-flash-message"

class alert {
  @observable message = 'Hello World';
  @observable type = 'info';

  reaction = autorun(async () => {
    showMessage({
        message: this.message,
        description: "This is our second message",
        type: this.type,
      })
  })

}

export default new alert();
