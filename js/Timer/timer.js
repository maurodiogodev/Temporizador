import state from './state.js'
import * as el from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'

export function countdown() {

    clearTimeout(state.countdownId)

    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        actions.reset()
        sounds.kitchenTimer.play()
        return
    }

    canAddOrSub(minutes)
    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout(() => countdown(), 1000)
}

export function addFive() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    canAddOrSub(minutes)

    if (!state.canAdd) {
        return
    }

    minutes += 5
    updateDisplay(minutes, seconds)
    canAddOrSub(minutes)
}

export function subFive() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    canAddOrSub(minutes)

    if (!state.canSub) {
        return
    }

    minutes -= 5
    updateDisplay(minutes, seconds)
    canAddOrSub(minutes)
}

export function canAddOrSub(minutes) {
    if (minutes + 5 > 60) {
        state.canAdd = false
        el.addMinutes.classList.add('disabled')
    } else {
        state.canAdd = true
        el.addMinutes.classList.remove('disabled')
    }

    if (minutes - 5 < 0) {
        state.canSub = false
        el.subMinutes.classList.add('disabled')
    } else {
        state.canSub = true
        el.subMinutes.classList.remove('disabled')
    }
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}