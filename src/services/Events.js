import moment from 'moment'
import store from "@store/index";

export const nextEvents = (events) => {
  let AllItems = Object.values(events)
  let items = []

  AllItems.forEach(event => {
    const now = moment()
    const startDate = moment.unix(event.startDate)

    if (startDate.isAfter(now)) {
      items.push(event)
    }
  })

  return items
}

export const currentEvent = (events) => {
  let AllItems = Object.values(events)
  let items = []

  AllItems.forEach(event => {
    const now = moment()
    const startDate = moment.unix(event.startDate)
    const endDate = startDate.add(event.duration, 'minutes')

    if (startDate.isBefore(now) && endDate.isAfter(now)) {
      items.push(event)
    }
  })

  return items
}

export const previousEvents = (events) => {
  let AllItems = Object.values(events)
  let items = []

  AllItems.forEach(event => {
    const now = moment()
    const startDate = moment.unix(event.startDate)
    const endDate = startDate.add(event.duration, 'minutes')

    if (endDate.isBefore(now)) {
      items.push(event)
    }
  })

  return items
}

export const userNextEvents = (events, uid) => {
  let items = []
  const user = uid
  const next = nextEvents(events)

  next.forEach(event => {
    for (var uid in event.subscribers) {
      if (uid === user) {
        items.push(event)
      }
    }
  })
  return items
}

export const userPreviousEvents = (events, uid) => {
  let items = []
  const user = uid
  const previous = previousEvents(events)

  previous.forEach(event => {
    for (var uid in event.subscribers) {
      if (uid === user ) {
        items.push(event)
      }
    }
  })
  return items
}
