import core from '../core.js'

/**
 * Types of events.
 *
 * @constant None: (0) No event.
 * @constant KeyPressed: (1) Key down event
 */

/**
 * @namespace core
 *
 * @description
 */
export const EventType = {
  None: 0,
  KeyPressed: 1,
  KeyReleased: 2,
  MouseDown: 3,
  MouseUp: 4,
  MouseMove: 5,
}

/**
 * @namespace core
 *
 * @description
 */
export class Event {
  static currentEventID = 0

  // /** @type {Object.<string, Array.<function>>} */
  static events = {
    KeyPressed: [],
    KeyReleased: [],
  }

  static Init() {
    //Handlers
    window.onerror = error => {
      core.Logger.Error(error)
    }

    //Add all window event handlers
    addEventListener('keydown', event => {
      //Update event type
      Event.currentEventID = EventType.KeyPressed

      Event.events.KeyPressed.forEach(callback => {
        callback(event)
      })
    })

    //Add all window event handlers
    addEventListener('keyup', event => {
      //Update event type
      Event.currentEventID = EventType.KeyReleased

      Event.events.KeyReleased.forEach(callback => {
        callback(event)
      })
    })
  }

  /**
   * Add a handler for the event and it applies to all types of the event (
   *  So for keyboard it calls the callback for each key
   * )
   *
   * @Used for any event of a singular type like keydown or mousemove, for callbacks on a specific use the Keyboard class
   *
   * @see /Core/event/Keyboard.js
   *
   * @param {EventType} type Event type
   */
  static OnEvent(type, callback) {
    let event = 'None'

    //Check if there is any event type of the specified type
    Object.keys(EventType).forEach(v => {
      if (type === EventType[v]) {
        event = v
      }
    })

    //Make sure it exists
    const eventLocation = Event.events[event]

    //Handle only if exists
    if (eventLocation) eventLocation.push(callback)
    else {
      console.warn('Unable to register event: ' + type + ', event is unhandled')
    }
  }

  static GetEvent() {
    return Event.currentEventID
  }

  static IsCurrentEvent(id) {
    return Event.currentEventID === id
  }

  static GetEventName() {
    let name = 'None'

    Object.keys(EventType).forEach(v => {
      if (Event.currentEventID === EventType[v]) {
        name = v
      }
    })

    return name
  }
}
