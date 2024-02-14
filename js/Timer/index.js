import state from './Timer/state.js'
import * as events from './Timer/events.js'
import * as timer from './Timer/timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds


    events.registerControls()
    events.setMinutes()

    timer.updateDisplay()
    timer.canAddOrSub(minutes)
}
