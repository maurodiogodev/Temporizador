import state from 'github-favorites/Temporizador/js/Timer/state.js'
import * as events from 'github-favorites/Temporizador/js/Timer/events.js'
import * as timer from 'github-favorites/Temporizador/js/Timer/timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds


    events.registerControls()
    events.setMinutes()

    timer.updateDisplay()
    timer.canAddOrSub(minutes)
}
