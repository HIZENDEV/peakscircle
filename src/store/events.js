import { autorun, observable, computed, action } from "mobx"
import firebase from 'react-native-firebase'

class EventStore {
  @observable events = {};
  @observable loading = true;

  @computed get pastEvents() {
    return this.events.past || {};
  }
  @computed get currentEvents() {
    return this.events.current || {};
  }
  // @computed get nextEvents() {
  //   Object.values(this.events);
  //   return this.events || {};
  // }
  nextEvents() {
    const array = Object.values(this.events);
    console.log(array);
  }
  reaction = autorun(async () => {
    const events = await firebase
      .database()
      .ref("events")
      .once("value");
    this.events = events.val();
    this.loading = false
    console.log('autorun: ', this.events, 'loading: ', this.loading);
  });

  @action
  addEvent = eventInfo => {
    firebase
      .database()
      .ref("events/")
      .post(
        {
          title: eventInfo.title,
          description: eventInfo.description,
          duration: eventInfo.duration,
          location: eventInfo.location,
          submitter: eventInfo.submitter,
          subscribers: eventInfo.subscribers,
          startDate: eventInfo.startDate,
          subscribersCount: eventInfo.subscribersCount,
          subscribersLimit: eventInfo.subscribersLimit,
          picUrl: eventInfo.picUrl
        },
        function(error) {
          if (error) {
            console.log(error);
          } else {
            console.log("Event added successfully!");
          }
        }
      );
  };

  @action
  updateEvent = eventInfo => {
    firebase
      .database()
      .ref("events/" + eventInfo.key)
      .update(
        {
          title: eventInfo.title,
          description: eventInfo.description,
          duration: eventInfo.duration,
          location: eventInfo.location,
          submitter: eventInfo.submitter,
          subscribers: eventInfo.subscribers,
          startDate: eventInfo.startDate,
          subscribersCount: eventInfo.subscribersCount,
          subscribersLimit: eventInfo.subscribersLimit,
          picUrl: eventInfo.picUrl
        },
        function(error) {
          if (error) {
            console.log(error);
          } else {
            console.log("Event updated successfully!");
          }
        }
      );
  };

  @action
  removeEvent = eventInfo => {
    firebase
      .database()
      .ref("events/" + eventInfo.key)
      .remove(function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Event removed successfully!");
        }
      });
  };
}

export default new EventStore()
