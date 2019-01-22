import moment from 'moment'

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
  return items.length < 1 ? null : items
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
  return items.length < 1 ? null : items
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
  return items.length < 1 ? null : items
}

export const userNextEvents = (events, uid) => {
  let items = []
  const user = uid
  const next = nextEvents(events)

  next.forEach(event => {
    for (var userId in event.subscribers) {
      if (userId === user) {
        items.push(event)
      }
    }
  })
  return items.length < 1 ? null : items
}

export const userPreviousEvents = (events, uid) => {
  let items = []
  const user = uid
  const previous = previousEvents(events)

  previous.forEach(event => {
    for (let userId in event.subscribers) {
      if (userId === user ) {
        items.push(event)
      }
    }
  })
  return items.length < 1 ? null : items
}
