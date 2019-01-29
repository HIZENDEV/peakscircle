import { autorun, observable, computed, action, runInAction } from "mobx"
import firebase from 'react-native-firebase'
import Database from "@services/Database";

class EventStore {
  @observable initialState = {};
  @observable events = {};
  @observable loading = true;

  nextEvents() {
    const array = Object.values(this.events);
    console.log(array);
  }
  reaction = autorun(async () => {
    const events = await firebase
      .database()
      .ref("events")
      
      .once("value");
    this.initialState = events.val();

    let sortable = []
    let tempKey = []
    for (const event in this.initialState) {
      sortable.push(this.initialState[event])
    }
    for (const key in this.initialState) {
      tempKey.push(key)
    }
    for (let i = 0; i < sortable.length; i++) {
      sortable[i].key = tempKey[i]
    }
    sortable.sort(function (a, b) {
      return a.startDate - b.startDate
    })
    const temp = Object.assign({}, sortable)
    this.events = temp
    this.loading = false
    console.log('events: ', this.events, 'loading: ', this.loading);
  });

  @action
  addEvent = async (event) => {
    this.loading = true
    const result = await Database.pushEvent(event)
    runInAction(() => {
      this.loading = false
      if (result) {
        console.log(result)
      }
    })
  }

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
